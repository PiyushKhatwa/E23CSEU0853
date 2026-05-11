const getPriorityScore = (notification) => {
    const type = notification.type?.toLowerCase();

    let score = 0;

    if (type === "placement") score += 3;
    else if (type === "result") score += 2;
    else if (type === "event") score += 1;

    return score;
};

module.exports = getPriorityScore;