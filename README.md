### Task Management Application 

### Live Link: https://task-management-client-one.vercel.app

# Task Management Application with NextJs
 This is a task management application. I have created it using React Framework(NextJS), I have also added Tailwind CSS framework in this application. I have also integrated some tools like React Hook form for form validation, react-hot-toast and SweetAlert for notification and popup.
 At first you have to Login, because Only authenticated user can access his/her task. He can create, read and delete his task. If he wants to modify his task, he can  also edit  it. He can also filter his task using status and priority. He can also sort his task by date and time. I have also implemented pagination. 5 tasks will contain in every page. And if he wants, he can search for a specific task by its title.

 When I create this application,I have fetched some issues. i could't get the access token, It solve it using jwt-decode.And also Navbar does not update automatically, if I don't give hard reload.It is a nextJs issue. I can't solve it right now.




## Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Node.js](https://nodejs.org/): Make sure you have Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine using the following command:

2. Navigate to the project directory:

   ```bash
   cd task-management-client

   ```

3. Install the project dependencies using npm:

   ```bash
   npm install
   ```

## Setting up .env.local file

NEXT_PUBLIC_API_BASE_URL= https://task-management-server-sand.vercel.app/api/v1  or http://localhost:5000/api/v1



## Running the Application

Once you've completed the installation  you can start the development server:

```bash
  npm run dev
```



