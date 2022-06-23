import { useEffect, useRef } from "react";
import { createUtterancScript } from "@/@functions/functions";

type Props = {
  issueTerm: string | undefined;
};

export const Comment = ({ issueTerm }: Props) => {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    commentsRef.current?.append(createUtterancScript(issueTerm));
  }, []);

  return <div className="comments" ref={commentsRef} />;
};
