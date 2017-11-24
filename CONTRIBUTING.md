# Contributing

## General Workflow

1. Fork the repo
1. Pull/rebase and changes from organization master repo
1. Cut a namespaced feature branch from master with specific prefix (see prefix examples below)
1. Make commits to your feature branch. Prefix each commit like so: (see examples below)
1. When you’ve finished with your fix or feature, rebase upstream changes into your feature branch. After resolving any conflicts, push your branch to your personal Github  to check the build with Travis CI. If it passes, move on to #6, otherwise fix the code/tests and repeat #5 until all tests pass.
1. To submit your changes to the central repo, push your branch up to the central repo, then submit a pull request to merge with the master branch. Include a description of your changes.
1. Your pull request will be reviewed by another maintainer. The point of code reviews is to help keep the codebase clean and of high quality and, equally as important, to help you grow as a programmer. If your code reviewer requests you make a change you don't understand, ask them why.
1. Fix any issues raised by your code reviwer, and push your fixes as a single new commit to your feature branch.
1. Once the pull request has been reviewed, it will be merged by another member of the team. Do not merge your own commits.
1. DO NOT MERGE YOUR OWN COMMITS!

Note:
  - Delete all extra branches. Once a branch has been merged to master, delete it from the central repo and your own!
  - Don't attempt a pull request on the central repo until you've tested the build on your own forked repo

## Detailed Workflow

### Fork the repo

Use github’s interface to make a fork of the repo, then add that repo as an upstream remote:

```bash
git remote add upstream https://github.com/news-stand/news_stand.git
```

### Cut a namespaced feature branch from master

Your branch should follow this naming convention:
  - bug/...
  - feat/...
  - test/...
  - doc/...
  - refactor/...

These commands will help you do this:

```bash

# Creates your branch and brings you there
git checkout -b `your-branch-name`
```

### Make commits to your feature branch. 

Prefix each commit like so
  - (feat) Add a new feature
  - (fix) Fix inconsistent tests [Fixes #0]
  - (refactor) Refactor/improve existing code or tests
  - (cleanup) Remove stray logs or comments
  - (test) Create tests
  - (doc) Create or update documentation

Make changes and commits on your branch, and make sure that you
only make changes that are relevant to this branch. If you find
yourself making unrelated changes, make a new branch for those
changes.

#### Commit Message Guidelines

- Commit messages should be written in the present tense; e.g. "Fix continuous integration script".
- The first line of your commit message should be a brief summary of what the commit changes. Aim for about 70 characters max. Remember: This is a summary, not a detailed description of everything that changed.
- If you want to explain the commit in more depth, following the first line should be a blank line and then a more detailed description of the commit. This can be as detailed as you want, so dig into details here and keep the first line short.

### Rebase upstream changes into your branch

Once you are done making changes, you can begin the process of getting
your code merged into the main repo. Step 1 is to rebase upstream
changes to the master branch into yours by running this command
from your branch:

```bash
git pull --rebase upstream master
```

This will start the rebase process. You must commit all of your changes
before doing this. If there are no conflicts, this should just roll all
of your changes back on top of the changes from upstream, leading to a
nice, clean, linear commit history.

If there are conflicting changes, git will start yelling at you part way
through the rebasing process. Git will pause rebasing to allow you to sort
out the conflicts. You do this the same way you solve merge conflicts,
by checking all of the files git says have been changed in both histories
and picking the versions you want. Be aware that these changes will show
up in your pull request, so try and incorporate upstream changes as much
as possible.

You pick a file by `git add`ing it - you do not make commits during a
rebase.

Once you are done fixing conflicts for a specific commit, run:

```bash
git rebase --continue
```

This will continue the rebasing process. Once you are done fixing all
conflicts you should run the existing tests to make sure you didn’t break
anything, then run your new tests (there are new tests, right?) and
make sure they work also.

If rebasing broke anything, fix it, then repeat the above process until
you get here again and nothing is broken and all the tests pass.

### Local Testing

For testing, we have separate client- and server-side test suites. 

1. Client-Side Testing
    - Technologies/Libraries:
      - [Karma](https://karma-runner.github.io/1.0/index.html)
      - [Jasmine](https://jasmine.github.io/)
      - [Karma-Jasmine-Ajax](https://www.npmjs.com/package/karma-jasmine-ajax)
    - Debugging:
      - Click the 'debug' button on the Karma browser and open up the Chrome Dev Tools console

```bash
# karma client must be installed globally to run tests
npm install -g karma-cli
```

```bash
# to run the tests
karma start
```

2. Server-Side Testing
    - Technologies/Libraries:
      - [Jasmine](https://jasmine.github.io/)
      - [Jasmine-Node](https://jasmine.github.io/2.0/node.html)
      - [Jasmine-Expect](https://www.npmjs.com/package/jasmine-expect)

```bash
# to run the tests
npm run test
```

### Travis CI Testing

We use [Travis CI](https://docs.travis-ci.com) to test our builds when submitting 
to GitHub. Be sure to sign up for an account and enable all necessary [environment 
variables](https://docs.travis-ci.com/user/environment-variables/) in your settings 
or else the build will fail.

When you have a branch ready to test, push it up to your fork and let Travis run a build 
on it. If it fails, make additional changes on your local repo before testing again. The 
tests will be run again when you make a pull request later. Once you have a passing build, 
delete the branch on your forked repo.

```bash
# to check the build with Travis
git push origin <branch_name>
```

```bash
# to delete the branch on your origin repo once the build passes
git push -d origin <branch_name>
```

Note that Travis CI only tests our server-side tests right now.

### Make a pull request

Once you have a passing build with Travis, push the branch up to the central repo.

```bash
# to check the build with Travis
git push upstream <branch_name>
```

Make a clear pull request from the new branch to the upstream master
branch, detailing exactly what changes you made and what feature this
should add. The clearer your pull request is the faster you can get
your changes incorporated into this repo.

Travis will do a build of your branch and run the tests. If they don't pass, 
the branch won't be merged.

Two other people should give your changes a code review, and once they 
are satisfied one of them will merge your changes into upstream. If only one 
person has completed a code review and five hours have passed, then that reviewer 
can merge your changes into upstream without waiting for a second review. The goal 
is to give as many team members as possible a chance to see what's going on in 
every corner of the codebase. Alternatively, they may have some requested 
changes. You should make more commits to your branch to fix these, then follow this 
process again from rebasing onwards.

Once you get back here, make a comment requesting further review and
someone will look at your code again. If they like it, it will get merged,
else, just repeat again.

Thanks for contributing!

### Guidelines

1. Uphold the current code standard:
    - Keep your code [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)
    - Apply the [boy scout rule](http://programmer.97things.oreilly.com/wiki/index.php/The_Boy_Scout_Rule)  
    - Follow [STYLE-GUIDE.md](_STYLE-GUIDE.md)
1. Run the all tests before submitting a pull request.
1. Tests are very, very important. Submit tests if your pull request contains
   new, testable behavior.
   - We wil require at least 1 test per pull request where possible

## Checklist:

This is just to help you organize your process

- [ ] Did I cut my work branch off of master (don't cut new branches from existing feature brances)?
- [ ] Did I follow the correct naming convention for my branch?
- [ ] Is my branch focused on a single main change?
  - [ ] Do all of my changes directly relate to this change?
- [ ] Did I rebase the upstream master branch after I finished all my
  work?
- [ ] Did I write a clear pull request message detailing what changes I made?
- [ ] Did I get a code review?
  - [ ] Did I make any requested changes from that code review?

If you follow all of these guidelines and make good changes, you should have
no problem getting your changes merged in.


<!-- Links -->
[curriculum workflow diagram]: http://i.imgur.com/p0e4tQK.png
[Git Flow]: http://nvie.com/posts/a-successful-git-branching-model/
[GitHub Flow]: http://scottchacon.com/2011/08/31/github-flow.html
[Squash]: http://gitready.com/advanced/2009/02/10/squashing-commits-with-rebase.html
