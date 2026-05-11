import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  Select,
  MenuItem,
} from "@mui/material";

import NotificationCard from "../components/NotificationCard";
import { fetchNotifications } from "../services/api";

function Home() {
  const [notifications, setNotifications] = useState([]);
  const [type, setType] = useState("");

  useEffect(() => {
    loadNotifications();
  }, [type]);

  const loadNotifications = async () => {
    const data = await fetchNotifications(1, 10, type);

    setNotifications(data);
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Typography variant="h4" gutterBottom>
        All Notifications
      </Typography>

      <Select
        value={type}
        onChange={(e) => setType(e.target.value)}
        displayEmpty
        sx={{ marginBottom: 3, minWidth: 200 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Event">Event</MenuItem>
        <MenuItem value="Result">Result</MenuItem>
        <MenuItem value="Placement">Placement</MenuItem>
      </Select>

      {notifications.map((notification) => (
        <NotificationCard
          key={notification.ID}
          notification={notification}
        />
      ))}
    </Container>
  );
}

export default Home;