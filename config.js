module.exports = {

  unencryptedHookUrl: "", // unencrypted slack webhook url
  slackChannel: "#200-errors",  // slack channel to send a message to
  slackUsername: "AWS SNS", // slack username to user for messages
  region: "ap-southeast-2", // default region for links in services that dont include region in sns
  icon_emoji: ":robot_face:", // slack emoji icon to use for messages
  orgIcon: "https://s3.amazonaws.com/production-activepipe-api/images/activepipe-logo.png", // url to icon for your organization for display in the footer of messages
  orgName: "ActivePipe", // name of your organization for display in the footer of messages
  services: {
    elasticbeanstalk: {
      match_text: "ElasticBeanstalkNotifications" // text in the sns message or topicname to match on to process this service type
    },
    cloudwatch: {
      match_text: "CloudWatchNotifications" // text in the sns message or topicname to match on to process this service type
    },
    codedeploy: {
      match_text: "CodeDeploy" // text in the sns message or topicname to match on to process this service type
    },
    elasticache: {
      match_text: "ElastiCache" // text in the sns message or topicname to match on to process this service type
    },
    autoscaling: {
      match_text: "AutoScaling" // text in the sns message or topicname to match on to process this service type
    }
  }

}
