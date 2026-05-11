import axios from "axios";

const API =
  "http://4.224.186.213/evaluation-service/notifications";

const fallbackNotifications = [
  {
    ID: 1,
    Type: "Placement",
    Message: "Amazon Hiring Drive",
    Timestamp: "2026-04-22",
  },
  {
    ID: 2,
    Type: "Result",
    Message: "Semester Results Published",
    Timestamp: "2026-04-22",
  },
  {
    ID: 3,
    Type: "Event",
    Message: "Hackathon Event",
    Timestamp: "2026-04-22",
  },
];

export const fetchNotifications = async (
  page = 1,
  limit = 10,
  type = ""
) => {
  try {
    const response = await axios.get(API, {
      params: {
        page,
        limit,
        notification_type: type,
      },
    });

    return response.data.notifications || [];
  } catch (error) {
    console.error("API failed, using fallback data");

    let filteredData = fallbackNotifications;

    if (type) {
      filteredData = fallbackNotifications.filter(
        (notification) => notification.Type === type
      );
    }

    return filteredData;
  }
};