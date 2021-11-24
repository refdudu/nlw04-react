import { AppProps } from "next/app";

import { ChallengesProvider } from "../contexts/ChallengesContext";
import { CountdownProvider } from "../contexts/CountdownContext";

import "../styles/global.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChallengesProvider>
      <CountdownProvider>
      <Component {...pageProps} />
      </CountdownProvider>
    </ChallengesProvider >
  );
}
