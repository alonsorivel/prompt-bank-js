# Git Branching and Committing Guide

This guide walks you through the process of managing branches and commits in Git, which is essential for version control in projects.

## 1. Create a New Branch

To create a new branch and switch to it, you can use either the `git checkout` command with the `-b` option or the `git switch` command with the `-c` option for Git version 2.23 and above.

- Using `git checkout`:
  ```bash
  git checkout -b new-branch-name
  ```

- Using `git switch`:
  ```bash
  git switch -c new-branch-name
  ```

## 2. Switch to the New Branch

If you need to switch to another branch, use one of the following commands:

- Using `git checkout`:
  ```bash
  git checkout new-branch-name
  ```

- Using `git switch`:
  ```bash
  git switch new-branch-name
  ```

## 3. Commit Changes

After making changes, use the following commands to commit them:

- Check status:
  ```bash
  git status
  ```

- Stage changes for commit:
  - To stage all changes:
    ```bash
    git add .
    ```
  - To stage specific files:
    ```bash
    git add path/to/file1 path/to/file2
    ```

- Commit the changes:
  ```bash
  git commit -m "Your commit message"
  ```

## 4. Push the Changes

Push your changes to the remote repository with the following command:

- Pushing for the first time:
  ```bash
  git push -u origin new-branch-name
  ```

- Pushing subsequent changes:
  ```bash
  git push
  ```

This guide helps you manage code changes in a structured way, facilitating collaboration and maintaining a project's development history.
