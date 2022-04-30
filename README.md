## K6 FOR LOAD TESTS

### 1. Introduction

**Grafana K6** is an open-source load testing tool that makes performance testing easy and productive for engineering
teams. K6 is free, developer-centric, and extensible.

Using K6, you can test the reliability and performance of your systems and catch performance regressions and problems
earlier. K6 will help you to build resilient and performant applications that scale.

Use cases:

- Load testing: K6 is optimized for minimal resource consumption and designed for running high load tests (spike,
  stress, soak tests).
- Performance and synthetic monitoring: With K6, you could run tests with a small amount of load to continuously
  validate the performance and availability of your production environment.
- Chaos and reliability testing: K6 provides an extensible architecture. You can use K6 to simulate traffic as part of
  your chaos experiments or trigger them from your K6 tests.

### 2. Useful documents

- K6 documents: https://k6.io/docs

### 3. Notes

- There are many executors, please choose what you want and put them into your scenarios with some required attributes:
    - **shared-iterations**: A fixed amount of iterations is "shared" between a number of VUs. If you use this, please
      set up `vus, iterations & maxDuration`.
    - **per-vu-iterations**: Each VU executes an exact number of iterations. If you use this, please set
      up `vus, iterations & maxDuration`.
    - **constant-vus**: A fixed number of VUs execute as many iterations as possible for a specified amount of time. If
      you use this, please set up `duration`. Note that, `(iteration) duration` is the time from start to finish of the
      VU's `exec` function.
    - **externally-controlled**: Control and scale execution at runtime via k6's REST API or the CLI. The required param
      is `duration`.
    - **constant-arrival-rate**: A fixed number of iterations are executed in a specified period of time. The required
      params are `duration, rate & preAllocatedVUs`. Note that, `rate=X & timeUnit=Y` means X iterations per Y time. For
      example, rate = 90 & timeUnit = '1m' means 90 iterations per one minute (= 1.5 Request Per Second).
    - Other executors you can find here: [K6 Scenarios](https://k6.io/docs/using-k6/scenarios)

- What is **gracefulStop** in each scenario?. This option is available for all executors except `externally-controlled`
  and allows the user to specify a duration to wait before forcefully interrupting them. The default value of this
  property is 30s.

- To understand the **arrival-rate** clearer in closed model (constant-vus executor) and opened model (
  constant-arrival-rate or ramping-arrival-rate executors), please
  see [this document](https://k6.io/docs/using-k6/scenarios/arrival-rate/).

- Why should we use **senarios** instead of normal config fields?:
    - asd

- From the perspective of human perceptive abilities, the following guidance points
  from [Nielsen Norman Group](https://www.nngroup.com/articles/response-times-3-important-limits/) might be of help when
  deciding on what latency and response time to aim for:
    - 0.1 second is about the limit for having the user feel that the system is reacting instantaneously, meaning that
      no special feedback is necessary except to display the result.
    - 1.0 second is about the limit for the user's flow of thought to stay uninterrupted, even though the user will
      notice the delay. Normally, no special feedback is necessary during delays of more than 0.1 but less than 1.0
      second, but the user does lose the feeling of operating directly on the data.
    - 10 seconds is about the limit for keeping the user's attention focused on the dialogue. For longer delays, users
      will want to perform other tasks while waiting for the computer to finish, so they should be given feedback
      indicating when the computer expects to be done. Feedback during the delay is especially important if the response
      time is likely to be highly variable, since users will then not know what to expect.

### 4. Results

![Media_1](./media/1.png)
![Media_2](./media/2.png)


