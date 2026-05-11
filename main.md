# Stage 1

## APIs

### GET /api/notifications

Fetch all notifications.

### PATCH /api/notifications/:id/read

Mark notification as read.

# Stage 2

## Database Choice

PostgreSQL is chosen because:
- structured data
- indexing support
- efficient querying
# stage 3
The query becomes slow because the database performs a full table scan when indexes are missing. Since the notifications table contains millions of records, filtering and sorting operations become expensive.

The query filters on:
- studentID
- isRead

and sorts on:
- createdAt

A composite index on these columns improves performance significantly.

Indexes improve read performance but increase storage usage and slightly slow down write operations.

# Stage 4

To reduce database overload:
- Redis caching can reduce repeated database queries
- Pagination prevents loading excessive records
- Lazy loading improves frontend performance
- WebSockets reduce unnecessary polling requests

# Stage 5

Sequential notification processing creates delays for large user bases.

Using message queues like RabbitMQ or Kafka improves scalability by distributing notification jobs across background workers.