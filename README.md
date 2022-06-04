# OpenTelemetry Short Guide

Dedicated repository for teaching others about OpenTelemetry!

## Description:

---

OpenTelemetry is a collection of tools, APIs, and SDKs. Use it as an instrument, to generate, collect, and export telemetry data (metrics, logs, and traces) to help you analyze your software's performance and behavior.
Observability generally means how well you can understand what is going on internally in a system based on its outputs.
OpenTelemetry is generally available across several languages, not only in Node.js.
OpenTelemetry project standratize the way we should monitor our distrubted systems, regardless of our tech-stack. 
Using OpenTelemetry will allow you to debug and troubleshoot your microservices  architecture without getting into nightmares.

In order to talk about observability we need to know the term - 
M.E.L.T: (official whitepapar)
Metrics - collected at regular intervals, includes timestamp, name, numeric values and a count of the measured events. Can include error rate, response time or even output
Events - Add metadata onthem! It will allow us to ask questions about them.
Logs
Traces

In this article, I will demonstrate Node.js + OpenTelemetry usage
Prerequisites:
You know how to use Docker and you have it installed on your machine
You have familiarity with Node.js and you can make a simple express / FastAPI route that will return simple string as a response to a GET request

So, what we are going to do here? 

Let's start with building it!
Run your Docker environment
Create a basic Node.js app using npm init 
Run tracing tool like Zipkin using it's published Docker image by running: docker run - rm -d -p 9411:9411 - name zipkin openzipkin/zipkin
Install OpenTelemetry packages: (see snippet below) 
Install Express / FastAPI
Create a simple hello world route that will return simple string as a response to a GET request

Tracing Example:
Tracing your app in a microservices architecture is crucial, this is called - "Distributed Tracing". This will allow you to pinpoint where failures occurs and what causes poor performance. For good tracing we will need attach span context and correlation context . Span context can include trace id, trace flags, trace state and etc. Correlation context carries user defined properties such as order.id, hostname, geolocation of the request's origin, and etc. We will want to bundle those ("propagation") and send it forward.
Check that your Zipkin image is running: http://localhost:9411/zipkin/
Setup a new file "tracing.js" in your Node package with the code (taken from OpenTelemetry official site):

Step 1Let's adjust it to use Zipkin:
Now, just run the app via http://localhost:{PORT}/{route_path} and you will see the logs on Zipkin!

---

We can now put some metrics using prometheus!
docker run --rm -d -p 9090:9090 --name prometheus prom/prometheus
Then, try to run: http://localhost:9090/
Now, we will need to set the scrape interval, let's say for 15s interval as default and for this service we will override it to 10s.
In order to override the prometheus configuration, we will need to customize the image. For that we will need to create a Dockerfile and prometheus configuration.

### Running tracing service:

* Using Zipkin to collect the traces:
  * Start Docker and run: `docker run --rm -d -p 9411:9411 --name zipkin openzipkin/zipkin`
