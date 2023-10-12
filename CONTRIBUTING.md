
# CONTRIBUTION GUIDELINES
Contributors are encouraged to follow these guidelines when contributing:

- Fork the repository.
- Create a branch for your contribution.
- Submit a pull request for review, ensuring your code passes all tests.

## Pull Request Description Template (Markdown)
The description of your PR should contain the following headings and corresponding content in Markdown format.

```
#### What does this PR do?
#### Description of Task to be completed?
#### How should this be manually tested?
#### Screenshots (if appropriate)
#### Any background context or notes you want to provide?
```

# Project Coding Standards and Best Practices


## Table of Contents

1. [Project Structure](#project-structure)
2. [File Naming Conventions](#file-naming-conventions)
3. [Code Formatting](#code-formatting)
4. [Linting](#linting)
5. [State Management](#state-management)
6. [Dependency Management](#dependency-management)
7. [Consistent Styling](#consistent-styling)
8. [Libraries](#libraries-management)

---

### 1. Project Structure

- Organize project files and directories logically. Commonly used structures include grouping components, pages, assets, and utility functions into separate directories.

```

└── app
	├── assets/
	    ├── images/
	    ├── icons/
    ├── articles/
	    ├── page.tsx
    ├── components/
	    ├── common/
		    ├── button.tsx
		    ├──	input.tsx
    ├── layout.tsx
    ├── page.tsx
    ├── globals.css
    └── pages/
        ├── homepage.tsx
    ├── utils/
        └── index.tsx
├── README.md

```



### 2. File Naming Conventions

- Use PascalCase for  component filenames (e.g., `MyComponent.tsx`) 

### 3. Code Formatting

- Use Prettier to maintain consistent code formatting throughout the project. Define and enforce formatting rules in a `.prettierrc` file.

### 4. Linting

- Utilize ESLint for static code analysis to catch potential issues and enforce coding standards. Configure ESLint rules to match project requirements.

### 5. State Management

- Use a state management library (Redux  Tool kit ) when required for managing global state.


### 6. Dependency Management

- Keep dependencies up-to-date. Use a package manager  (npm). Audit and update packages to patch security vulnerabilities.


### 7. Consistent Styling

- Follow consistent styling conventions, especially when using Tailwind CSS. Document custom classes as needed.

### 7. Libraries

#### DaisyUI
- Purpose: DaisyUI provides a set of highly customizable UI components, including buttons, forms, modals, and more, that can be easily integrated into your Tailwind CSS projects. It's a collection of ready-to-use components that work seamlessly with Tailwind CSS classes.
- Features: DaisyUI simplifies the process of creating and styling UI components by leveraging the power of Tailwind CSS, making it easier to maintain a consistent design across your web application.





---

Please refer to these coding standards and best practices while working on the project. Consistency and adherence to these guidelines will lead to a more maintainable and robust application.

If you have any questions or need clarification on any of these guidelines, feel free to reach out to the project leads or maintainers.

Happy coding!



