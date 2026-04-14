import React, { useState } from 'react';

export default function FeedbackForm() {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [responseId, setResponseId] = useState<number | null>(null);

  const submitFeedback = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title,
          body: message,
          userId: 1
        })
      });

      if (!response.ok) throw new Error("Failed to submit");

      const data = await response.json();

      setResponseId(data.id);
      setIsSubmitted(true);

    } catch (err) {
      console.error(err);
    }
  };

  if (isSubmitted) {
    return (
      <div className="success">
        <h2>Thank you for your feedback!</h2>
        <p>Your message was saved with ID: {responseId}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submitFeedback}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <textarea
        placeholder="Your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
      />

      <button type="submit">Submit Feedback</button>
    </form>
  );
}
