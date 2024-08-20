# Integrated Knowledge Management (IKM) Development Documentation Site

This is the repository that drives the website at [ikm.dev](https://www.ikm.dev). This site was created to 
be the development documentation site, defining installation, usage, and enterprise integration of the products
for Komet.  This website is built using [Docusaurus 2](https://docusaurus.io/).

### Team Ownership - Product Owner
Automation Team, authored by Tinkar Engineering Team.
Oliver, Sebastian <seoliver@deloitte.com>

## Running the app

### Prerequisites

* Install [NodeJS](https://nodejs.org)
* Install [YARN Package Manager](https://yarnpkg.com/getting-started/install)
* Install [pre-commit](https://pre-commit.com/#install)

## Installation

To install the dependencies on your local computer, just run the following:

```bash
yarn install
```

## Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without
having to restart the server.

```bash
yarn start
```

## Writing

By default this site will automatically order things on the sidebar using a number prefix, or if you would
rather, by settings in the `_category_.json` file.  Only folders with the `_category.json` file will show up
on the sidebar. Other than that, just start writing in Markdown format. There are some minor differences,
as this interprets markdown by React objects, but really, that shouldn't matter much when writing.

If you want more details on customizing the markdown or using MDX, please visit
the [Docusaurus 2](https://docusaurus.io/) documentation.

Similarly, there are a lot of conventions to Markdown.  The best guide that I have found is at the
[Markdown Guide](https://www.markdownguide.org).

### Adding Images to an Article

In most cases, you can add an image to a local folder within the docs folder, and refer to it with the standard
markdown notation:

```markdown
![Description](./images/image-name.jpg)
```

In some cases, you will need to resize your image to avoid it being a large file upload, because the checks will
limit this to 1MB. To achieve this, use the `sips` command that is available in most OSX and Linux OSes.  This
fixes the output to a specified ratio.

First, we want to convert it to jpeg and increase the compression:

```bash
sips -s format jpeg -s formatOptions high
```

If that's not enough, try and adjust the size.  The following example resizes to 1280 width (and the height is
adjusted to keep the ratio):

```bash
sips -Z 1280 example.jpg
```

For more information, please visit the [following guide][1] or the [sips man page][2]

## Code Quality Checks

Before committing, you need to check that your code meets the standards. Executing the following command will
give you feedback about what needs to be corrected.  This should be executed and the problems corrected prior to any
pull/merge request.

```bash
pre-commit run --hook-stage manual --all-files
```

> Note that often times, the code quality checks can automatically fix the problem and after running, you just need
> to add your files again.  Please read the output carefully for details.

## Build

This command generates static content into the `build` directory and can be served using any static contents hosting
service.  This will also check all links, so it is suggested that you run this before executing a pull/merge request.

```bash
yarn build
```

## Security issues

Occasionally, we will see security issues.  These can often be mitigated with

```shell
yarn upgrade
```

## Deployment

This code uses Continuous Deployment, and each commit will result in a new push to the website.  This is maintained via
github actions in the 'build-docusaurus.yaml' file.

## Updating Dependencies

Occasionally, you'll want to update your dependencies.  Especially if there is a security warning.  To do this, follow
[this guide][3]

## Building the image

At the root of this repository is a Jenkinsfile that will build and push an image of the site to
your Jenkins instance's default nexus registry. The repository `swf-titan-docs` contains a helm chart
that can subsequently deploy the image to Kubernetes.

[1]: <https://medium.com/shell-life/convert-images-for-web-using-the-sips-command-line-on-macosx-656c502a67a6>
[2]: <https://ss64.com/osx/sips.html>
[3]: <https://www.mend.io/free-developer-tools/blog/yarn-update/>
