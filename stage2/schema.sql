CREATE TABLE notifications (
    id UUID PRIMARY KEY,
    student_id INT,
    type VARCHAR(20),
    message TEXT,
    is_read BOOLEAN,
    created_at TIMESTAMP
);