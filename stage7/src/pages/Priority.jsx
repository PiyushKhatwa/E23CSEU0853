import { useEffect, useState } from "react";
import { Container, Typography } from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../services/api";

function Priority() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    loadPriorityNotifications();
  }, []);

  const getScore = (type) => {
    if (type === "Placement") return 3;
    if (type === "Result") return 2;
    return 1;
  };

  const loadPriorityNotifications = async () => {
    const data = await fetchNotifications();

    const sorted = data
      .sort(
        (a, b) => getScore(b.Type) - getScore(a.Type)
      )
      .slice(0, 10);

    setNotifications(sorted);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        Priority Notifications
      </Typography>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </Container>
  );
}

export default Priority;