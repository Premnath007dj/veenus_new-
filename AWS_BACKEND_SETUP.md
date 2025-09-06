# AWS Backend Setup for Contact Form

This document provides step-by-step instructions on how to set up the AWS backend for the contact form. The backend consists of an API Gateway, a Lambda function, and a DynamoDB table.

## Step 1: Create a DynamoDB Table

1.  Go to the **DynamoDB** console in your AWS account.
2.  Click on **"Create table"**.
3.  For **"Table name"**, enter `ContactFormSubmissions`.
4.  For **"Primary key"**, enter `id` and select **"String"**.
5.  Leave the rest of the settings as default and click **"Create table"**.

## Step 2: Create an IAM Role for the Lambda Function

1.  Go to the **IAM** console.
2.  Go to **"Roles"** and click **"Create role"**.
3.  For **"Trusted entity type"**, select **"AWS service"**.
4.  For **"Use case"**, select **"Lambda"** and click **"Next"**.
5.  Search for and select the `AWSLambdaBasicExecutionRole` policy.
6.  Click **"Next"**.
7.  Give the role a name, e.g., `ContactFormLambdaRole`, and click **"Create role"**.
8.  Open the role you just created, go to the **"Permissions"** tab, and click **"Add permissions"** -> **"Create inline policy"**.
9.  Go to the **"JSON"** tab and paste this policy (it allows the Lambda to write to your DynamoDB table):
    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Effect": "Allow",
                "Action": "dynamodb:PutItem",
                "Resource": "arn:aws:dynamodb:YOUR_AWS_REGION:YOUR_AWS_ACCOUNT_ID:table/ContactFormSubmissions"
            }
        ]
    }
    ```
    (You'll need to replace `YOUR_AWS_REGION` and `YOUR_AWS_ACCOUNT_ID`)
10. Click **"Review policy"**, give it a name, and click **"Create policy"**.

## Step 3: Create the Lambda Function

1.  Go to the **Lambda** console and click **"Create function"**.
2.  Select **"Author from scratch"**.
3.  For **"Function name"**, enter `contactFormHandler`.
4.  For **"Runtime"**, select **"Node.js 18.x"** (or a recent Node.js version).
5.  For **"Architecture"**, select **"x86_64"**.
6.  Under **"Permissions"**, expand **"Change default execution role"** and select **"Use an existing role"**.
7.  Select the `ContactFormLambdaRole` you created in the previous step.
8.  Click **"Create function"**.
9.  In the function's code editor, paste the code from the `lambda-contact-form-handler.js` file.
10. You will also need to add the required Node.js packages. The easiest way is to create a zip file containing the `lambda-contact-form-handler.js` file and a `node_modules` folder with the required packages (`@aws-sdk/client-dynamodb`, `@aws-sdk/lib-dynamodb`, `uuid`), and then upload the zip file to your Lambda function.

## Step 4: Create the API Gateway

1.  Go to the **API Gateway** console and click **"Build"** for **"REST API"**.
2.  Select **"New API"**.
3.  For **"API name"**, enter `ContactFormAPI`.
4.  Click **"Create API"**.
5.  In the **"Actions"** dropdown, select **"Create Resource"**.
6.  For **"Resource Name"**, enter `contact`.
7.  Click **"Create Resource"**.
8.  With the `/contact` resource selected, in the **"Actions"** dropdown, select **"Create Method"**.
9.  Select **"POST"** from the dropdown and click the checkmark.
10. For **"Integration type"**, select **"Lambda Function"**.
11. Check the box for **"Use Lambda Proxy integration"**.
12. For **"Lambda Function"**, select the `contactFormHandler` function you created.
13. Click **"Save"**.
14. In the **"Actions"** dropdown, select **"Enable CORS"**.
15. Click **"Enable CORS and replace existing CORS headers"**.
16. In the **"Actions"** dropdown, select **"Deploy API"**.
17. For **"Deployment stage"**, select **"[New Stage]"**.
18. For **"Stage name"**, enter `prod`.
19. Click **"Deploy"**.
20. You will now have an **"Invoke URL"**. This is the URL you will use in your frontend.

## Step 5: Update the Frontend

Once you have completed these steps and have your **Invoke URL** from API Gateway, you need to update the frontend code to use it.
