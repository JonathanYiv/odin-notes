# General Definitions
* Continuous Integration (CI)
    * The process of automating the build and testing of code every time a team member commits changes to version control
* Continuous Delivery (CD)
    * The process to build, test, configure, and deploy from a build to a staging production environment
    * A human determines when to release these changes, usually dependent on business reasons
    * In order to continuously deliver, you must continuously integrate
* Continuous Deployment (CD)
    * The process to build, test, configure, and deploy a successful build to an actual production environment
    * In order to continuously deploy, you must continuously deliver
    * Humans do not decide when it is released; it is released immediately

# GitLab Definitions
* Runner
    * An isolated virtual machine that picks up jobs through the coordinator API of GitLab CI
* Pipeline
    * A group of jobs that get executed in stages.
    * All of the jobs in a stage are executed in parallel (if enough concurrent Runners), and if they all succeed, the pipeline moves to the next stage.
    * If one of the jobs fail, the next stage is not executed.
    * Stages:
        1. build
        2. test
        3. deploy
* `.gitlab-ci.yml`
    * Tells the GitLab Runner what to do
    * runs a pipeline with three stages (build/test/deploy) by default
    * stages are optional
    * a run-through without failure will verify

# `.gitlab-ci.yml`
* configuration file for what CI does with your project
* any push to the repo will have GitLab look for the file and start jobs on Runners according to the content of the file

```
before_script:
  - apt-get update -qq && apt-get install -y -qq sqlite3 libsqlite3-dev nodejs
  - ruby -v
  - which ruby
  - gem install bundler --no-ri --no-rdoc
  - bundle install --jobs $(nproc)  "${FLAGS[@]}"

rspec:
  script:
    - bundle exec rspec

rubocop:
  script:
    - bundle exec rubocop
```
* In this example for a Ruby app:
    * There are two jobs defined: rubocop/rspec - and both execute different commands (defined in the `script` block)
    * Before every job, the commands defined by `before_script` are executed

# GitLab CI/CD
## Using Continuous Integration
1. Add .gitlab-ci.yml to the root directory of your repository
2. Configure a runner
3. Each commit/push triggers your CI Pipeline

# Conclusion
Commits SHOULD trigger the CI Pipeline.

Reading through like 10 gitlab issues... I think it's GitLab's fault:
* https://gitlab.com/gitlab-org/gitlab-ce/issues/22847 
* https://gitlab.com/gitlab-com/support-forum/issues/575 
* https://gitlab.com/gitlab-org/gitlab-ce/issues/42642 
* https://gitlab.com/gitlab-org/gitlab-ce/issues/29317

And they all have the same pattern: 
* I have this issue!
* a week later - oop, looks like it's working now for whatever reason
* GitLab Staff: We are closing this issue because of inactivity.

Hmm....they should fix the underlying issue.....
Anyway, giving up on GitLab Pages.