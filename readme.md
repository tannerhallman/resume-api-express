# My Resume API

This is a simple Express Node.js API that serves as a digital representation of my resume, providing information about my professional experience and skills.

## Table of Contents

- [My Resume API](#my-resume-api)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Endpoints](#endpoints)
    - [Experience](#experience)
    - [Skills](#skills)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

## Overview

This API is designed to showcase my professional experience and skills, providing data in a structured format. It's built using Express.js and is a straightforward example of a CRUD (Create, Read, Update, Delete) API for the "Experience" and "Skills" sections of my resume.

## Endpoints

### Experience

- `GET /experience`: Get a list of professional experiences.
- `POST /experience`: Add a new professional experience.
- `PUT /experience/:id`: Update a specific professional experience by its ID.
- `DELETE /experience/:id`: Delete a specific professional experience by its ID.

### Skills

- `GET /skills`: Get a list of technical skills, languages, and interests.
- `POST /skills`: Add new skills or interests.
- `PUT /skills/:id`: Update a specific skill or interest by its ID.
- `DELETE /skills/:id`: Delete a specific skill or interest by its ID.

## Getting Started

To run this project locally or deploy it to your own server, follow these steps:

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/my-resume-api.git
   cd my-resume-api
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create an .env file with your database credentials. You can use a local database or a remote one. For simplicity, I am hosting a free MySQL database from Planetscale. You will need these env vars:

   ```
   DATABASE_HOST=
   DATABASE_USERNAME=
   DATABASE_PASSWORD=
   ```

5. Start the server:

   ```bash
   npm start
   ```

The API will be available at `http://localhost:3000` by default. You can customize the port by setting the `PORT` environment variable.

## Usage

You can use this API to fetch information about my professional experience and skills programmatically. Here's a basic example using `curl` to retrieve my experience:

```bash
curl http://localhost:3000/experience
```

Make sure to adapt this to your preferred method of making HTTP requests, such as using a tool like Postman or integrating it into your own application.

## Contributing

If you have suggestions or improvements to this project, feel free to open an issue or create a pull request. Your contributions are welcome!

## License

This project is licensed under the [MIT License](LICENSE).