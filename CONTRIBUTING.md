# CONTRIBUTING.md

## Welcome to 'Lexis' 📃  
We’re thrilled that you’re interested in contributing to our project! This document will guide you through the steps to contribute your valuable work to *Lexis*, a project developed with Astro. We want to make the process simple and transparent, so here’s a step-by-step guide.

## Getting Started 🚀

1. **Familiarize yourself with Astro JS**: If you’re not already familiar with Astro JS, make sure to understand how it works. You can find plenty of useful information in the [official Astro documentation](https://docs.astro.build/).
2. **Set up your development environment**: We recommend using `npm` as the package manager for its efficiency and speed. If you don’t have `npm` installed.

---

## How to Contribute 🛠

### 1. Set up your environment

1. **Fork the repository**: Create a "fork" of the project in your GitHub account. To do this, click the "Fork" button at the top-right of the repository page on GitHub. This will create a copy of the repository in your GitHub account.
2. **Clone your fork**: After forking, clone the repository to your local machine. Copy the URL of your fork by clicking the green "Code" button, then run `git clone <URL-of-your-fork>` in your terminal.
3. **Add the original repository as a remote**: To keep your fork updated with the original repository changes, add the original repository as a remote. Run `git remote add upstream <original-repository-URL>`.
4. **Use the correct Node.js version**: Use `nvm use` or `nvm use <version>` to ensure you’re using the correct Node.js version. If you’re not using `nvm`, download the version specified in `.node-version` or `.nvmrc`.
5. **Install dependencies**: Navigate to the cloned project directory and run `npm install` to install all necessary dependencies.

---

### 2. Work on your changes

1. **Sync your fork**: You can sync your fork from `github.com/your-user/your-repo` by clicking *Sync fork*. Alternatively, you can use the terminal with `gh repo sync -b main` or `git switch main && git fetch upstream && git merge upstream/main`. More information is available in the [GitHub documentation](https://docs.github.com/).
2. **Create a new branch**: Before making changes, create a new branch using `git switch -c <your-branch-name>`.
3. **Develop your changes**: Implement your changes or improvements in your local branch. Make sure to follow the project’s coding practices and standards.
4. **Test your changes**: Run `npm run dev` to start the Astro development server and test your changes in the browser.

---

### 3. Submit your changes

1. **Commit your changes**: Once you’re satisfied with your work, commit your changes with a clear and descriptive message.
2. **Push to your fork**: Push your branch with the changes to your fork on GitHub using `git push origin <your-branch-name>`.
3. **Create a Pull Request (PR)**: In GitHub, go to your fork of *La velada del año 4* and click "Pull request" to start one. Clearly describe the changes you’ve made and why they’re necessary or useful for the project.

---

## Best Practices 🌟

- **Check open issues**: Before opening a PR, look at the open issues. If you think you can fix one and there isn’t already a PR addressing it, mention the issue number in your commit with `#issue-number`. You can also leave a comment to indicate that your PR addresses the issue.
- **Check open PRs**: Ensure you’re not duplicating work already in progress. You can contribute to open PRs by providing suggestions, reviews, or improvements.
- **Keep commits clean and descriptive**.
- **Follow the project’s code conventions**.
- **Keep your branch updated**: Frequently update your branch to stay in sync with the main branch of the project.
- **Participate in discussions**: Respond to comments or suggestions in your PR.

When working with global objects or types, use patterns like `new window.Date` instead of `new Date`, or `globalThis.NodeListOf` instead of `NodeListOf`. Refer to [MDN](https://developer.mozilla.org/) or Astro's documentation if unsure.

---

## Need Help? 🆘

If you have questions or need assistance, feel free to open an "issue" in the repository. Our team and community will be happy to help you.

---

Thank you for contributing to 'Lexis'! Together, we’re building something amazing. 🚀
