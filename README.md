# Day 3 - API Integration Report – FOOD TUCK
# API INTEGRATION PROCESS
1.	Environment Setup: 
# a.	Install Sanity: npm create sanity@latest -- --template clean --create-project "learning-sanity-project" --dataset production
# b.	Setting Up Environment Variables
Set up our environment variables. Create a `.env.local` file in your project root. Add the following variables:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token
# c.	Data Fetching:
Used Axios to retrieve product data from an external API (foods and chefs).
		Accessed the following Endpoints: 
		https://sanity-nextjs-rouge.vercel.app/api/foods
		https://sanity-nextjs-rouge.vercel.app/api/chefs
