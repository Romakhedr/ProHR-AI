import json
import boto3
import os
from botocore.exceptions import ClientError

# تهيئة عملاء خدمات AWS
s3_client = boto3.client('s3')
dynamodb = boto3.resource('dynamodb')

# أسماء الخدمات على AWS (تؤخذ من متغيرات البيئة Environment Variables)
BUCKET_NAME = os.environ.get('S3_BUCKET_NAME', 'prohr-resumes-bucket')
TABLE_NAME = os.environ.get('DYNAMODB_TABLE', 'CandidatesTable')

def lambda_handler(event, context):
    try:
        # استلام البيانات القادمة من API Gateway (تفترض أن الملف مرسل كـ JSON يحتوي على اسم الملف ومحتواه المشفر Base64)
        body = json.loads(event['body'])
        file_name = body.get('file_name') # مثال: resume.pdf
        file_content_base64 = body.get('file_content') # محتوى الـ PDF
        candidate_name = body.get('candidate_name')
        job_title = body.get('job_title')

        import base64
        file_bytes = base64.b64decode(file_content_base64)

        # 1. الخطوة الأولى: رفع ملف الـ PDF إلى Amazon S3
        s3_client.put_object(
            Bucket=BUCKET_NAME,
            Key=f"resumes/{file_name}",
            Body=file_bytes,
            ContentType='application/pdf'
        )
        
        file_url = f"https://{BUCKET_NAME}.s3.amazonaws.com/resumes/{file_name}"

        # 2. الخطوة الثانية: محاكاة تحليل السيرة الذاتية بالذكاء الاصطناعي (AI Matching Score)
        match_score = 88  # نتيجة المطابقة افتراضياً بناءً على تحليل المهارات

        # 3. الخطوة الثالثة: حفظ بيانات المرشح ونتيجة المطابقة في Amazon DynamoDB
        table = dynamodb.Table(TABLE_NAME)
        table.put_item(
            Item={
                'CandidateId': candidate_name + "_" + file_name,
                'CandidateName': candidate_name,
                'JobTitle': job_title,
                'ResumeS3Url': file_url,
                'MatchScore': match_score,
                'Status': 'Analyzed'
            }
        )

        return {
            'statusCode': 200,
            'body': json.dumps({
                'message': 'Successfully uploaded and processed resume!',
                'resume_url': file_url,
                'match_score': match_score
            })
        }

    except ClientError as e:
        return {
            'statusCode': 500,
            'body': json.dumps({'error': str(e)})
      }
