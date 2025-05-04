# 🔗 LinkWise - URL Shortener

LinkWise is a modern, full-stack URL shortener built with **Next.js**. It enables users to create concise, shareable links with optional authentication, and is designed for scalability and performance.

---

## 🚀 Features

- 🔗 Shorten long URLs into compact links
- 🔄 Automatic redirection from short link to original URL
- 🔐 Authentication via **NextAuth.js**
- 🧠 Modern UI with responsive design
- ☁️ Built with Next.js App Router and API Routes
- 💾 PostgreSQL integration via Prisma ORM
- 📊 Analytics dashboard *(coming soon)*

---

## 🛠️ Tech Stack

- **Frontend**: React, Next.js (App Router), Tailwind CSS
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: NextAuth.js
- **Deployment**: Vercel

---



## ⚙️ Getting Started

### Prerequisites

- Node.js ≥ 16.x
- PostgreSQL database
- npm / yarn / pnpm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JayShende/LinkWise.git
   cd LinkWise
   ```


#### 2. Install dependencies:

```bash
npm install
# or
yarn install
```

#### 3. Configure environment variables:

Create a `.env.local` file in the root directory and add the following:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/linkwise
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

Replace `user`, `password`, and other placeholders with your actual database credentials.

#### 4. Set up the database:

```bash
npx prisma migrate dev --name init
```

#### 5. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000/) in your browser to view the application.

---

## 📤 Deployment

You can deploy this project using [Vercel](https://vercel.com/):

1. Import the project into Vercel.
2. Set environment variables in the Vercel dashboard:
   * `DATABASE_URL`
   * `NEXTAUTH_SECRET`
   * `NEXTAUTH_URL`
3. Deploy the application.

---

## 🤝 Contributing

We welcome contributions from the community!

### How to Contribute

1. **Fork** the repository.
2. **Clone** your fork:

```bash
git clone https://github.com/yourusername/LinkWise.git
cd LinkWise
```

3. **Create a new branch** :

```bash
git checkout -b feature/your-feature-name
```

4. **Make your changes and commit:**

```bash
git commit -m "Add: Your meaningful message"
```

5. **Push to your fork:**

```bash
git push origin feature/your-feature-name
```

6. **Open a Pull Request** on the main repository.

---

### Contribution Guidelines

* **Code Quality** : Ensure code is clean and well-documented.
* **Branch Naming** : Use descriptive branch names (e.g., `feature/add-login`).
* **Commit Messages** : Write clear and concise commit messages.
* **Pull Requests** : Provide a detailed description of changes.
* **Testing** : Run tests and ensure they pass before submitting.
* **Issue Reporting** : Use the issue tracker to report bugs or suggest features.

---

## 🧾 License

This project is open-source and available under the [MIT License](https://chatgpt.com/c/LICENSE).

---

## 🙌 Acknowledgements

Thanks to all contributors and users for supporting the LinkWise project.

Feel free to ⭐️ the repo and share it with others!

```

---

Let me know if you'd like a version with badges, a table of contents, or a project logo added!
```
