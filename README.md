# CI-CD---Continuous-Integration-Continuous-Delivery
CI / CD Notes

🚀 CI/CD Complete Overview
✅ What is CI/CD?

CI/CD (Continuous Integration and Continuous Delivery) is an automated pipeline that speeds up software development and deployment with minimal manual effort.
It is commonly represented by the infinity symbol (∞) and is usually maintained by DevOps teams.

✅ Types of Testing
Unit Testing

Tests individual pieces or units of code to ensure each part behaves as expected.

Integration Testing

Tests how different modules or features interact after being combined.

Deployment

Deploys the developed and validated software to online environments where users can access it.

✅ Why CI/CD Matters

CI/CD helps teams:

Deliver updates faster

Detect issues early

Reduce manual errors

Maintain consistent deployments

Increase overall development speed and quality

✅ CI/CD Pipeline Stages

Development
Developers write and update code.

Commit
Code changes are pushed to GitHub, GitLab, or other version-control platforms.

Build
Source code is compiled or packaged into executable files.

Test
Automated tests run to validate functionality and code quality.

Release
The code is approved and prepared to be published.

Deploy
The application is deployed to environments such as:

Development

Staging

Production (final environment used by real users)

These deployment stages allow safe and progressive rollout inside an organization.

✅ Canary Rollout

A deployment strategy where new updates are released to a small percentage of users first.
Based on real-time feedback and performance, the update is either released to all users or rolled back.

✅ Popular CI/CD Tools

GitHub Actions

Jenkins

CircleCI

Travis CI

GitLab CI/CD

Bamboo

✅ GitHub Actions Overview

GitHub Actions automates developer workflows such as building, testing, and deploying applications.

Key Concepts

Workflows
Defined in .yml files and describe the complete automation process.

Events
Actions that trigger workflows (push, pull request, branch changes, etc.).

Jobs
Tasks executed as part of a workflow.

Runners
Machines where workflows execute.
These can be:

GitHub-hosted

Self-hosted (AWS, Azure, local server)

✅ GitHub Actions CI/CD Flow Example

Build your application (e.g., MERN app)

Push the code to GitHub

GitHub event triggers the workflow

Workflow runs build + tests + deployment

Application is deployed (e.g., AWS EC2)

Users access the updated version

The .yml workflow automatically performs every defined task on the runner machine.

✅ Automating Testing with GitHub Actions

You may have test scripts such as:

npm test


Running tests manually is slow. CI/CD solves this by:

Running tests automatically on every push or pull request

Blocking deployment unless all tests pass

Ensuring code quality before release

This creates a reliable and efficient development cycle.

✅ What Are Runners?

Runners are servers where GitHub Actions executes your workflow steps.
They handle tasks like:

Installing dependencies

Running tests

Building the project

Deploying to your environment

They can be GitHub-hosted or your own machines.
