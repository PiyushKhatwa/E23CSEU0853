import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material";

function NotificationCard({ notification }) {
  return (
    <Card sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="h6">
          {notification.Message}
        </Typography>

        <Chip
          label={notification.Type}
          sx={{ marginTop: 1 }}
        />

        <Typography sx={{ marginTop: 1 }}>
          {notification.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NotificationCard;