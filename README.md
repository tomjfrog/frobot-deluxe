# Frogbot Deluxe

This project is a showcase of an NPM project that uses both "modes" of Frogbot: Scan and Fix & Scan PR

## Scan and Fix
This mode looks at relevant vulnerabilities and creates one or more PRs to fix them.  A configurable option is to create
one PR per vulnerability or one PR per project.

## Scan PR
This mode looks at the PR and comments on it with relevant vulnerabilities.  Depending on the configuration the task can
block a PR from being merged until the vulnerabilities are fixed.

## Configuration
The configuration is stored in a file called `frogbot-config.yml` in the root of the project.  The file contains shared
configuration variables used by both modes of Frogbot.

