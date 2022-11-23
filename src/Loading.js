import React from 'react';

export default function Loading() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img src="/assets/load.gif" alt="loading" />
      <p> if no data after 5 seconds click the above arrow and select a continent</p>
    </div>
  );
}
