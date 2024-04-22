"use client";
import React from "react";

import Interview from "./Interview";
import { useMediaQuery } from "./useMediaQuery";
import "./styles.css";

function InterviewExercise() {
  const sidebarShow = useMediaQuery("(min-width: 500px)");

  const styles = {
    sidebar: (isShown) => ({
      display: isShown ? "block" : "none",
    }),
  };
  return (
    <main>
      <Interview />
      <aside style={styles.sidebar(sidebarShow)}>
        <img src="/gwen-artist.png" alt="Portrait of the artist" />
        <h2>About the Artist</h2>
        <p>
          Gwen Altaria is a contemporary artist known for her unique blend of
          traditional oil painting techniques and pop culture references. Born
          and raised in London, England, Vivi had an early love for both the
          fine arts and the fantastical worlds of video games.
        </p>
      </aside>
    </main>
  );
}

export default InterviewExercise;
