const axios = require("axios");
const getPriorityScore = require("./priority");

const API_URL =
  "http://4.224.186.213/evaluation-service/notifications?page=1&limit=10";

const fallbackNotifications = [
  {
    id: 1,
    type: "placement",
    message: "Amazon hiring drive",
  },
  {
    id: 2,
    type: "result",
    message: "Semester results announced",
  },
  {
    id: 3,
    type: "event",
    message: "Hackathon this weekend",
  },
];

const processNotifications = (notifications) => {
  const sortedNotifications = notifications
    .map((notification) => ({
      ...notification,
      priorityScore: getPriorityScore(notification),
    }))
    .sort((a, b) => b.priorityScore - a.priorityScore)
    .slice(0, 10);

  console.log("\nTop Priority Notifications:\n");
  console.log(sortedNotifications);
};

const fetchNotifications = async () => {
  try {
    console.log("Fetching notifications...\n");

    const response = await axios.get(API_URL);

    const notifications = response.data.notifications || [];

    processNotifications(notifications);
  } catch (error) {
    console.error(
      "API unavailable. Using fallback mock data instead.\n"
    );

    processNotifications(fallbackNotifications);
  }
};

fetchNotifications();