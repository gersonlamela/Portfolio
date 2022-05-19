import { RepositoryItem } from "./RepositoryItem";
import { useState, useEffect } from "react";

interface Repository {
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  language: string;
}

export function RepositoryList() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/gersonlamela/repos", {
      headers: {
        Authorization: `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 `,
      },
    })
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, []);

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-graylight dark:bg-dark200 ">
      <div className=" grid overflow-hidden grid-cols-1 lg:grid-cols-2 content-center  py-[50px] px-[180px]">
        {repositories.map((repository) => {
          return (
            <RepositoryItem key={repository.name} repository={repository} />
          );
        })}
      </div>
    </div>
  );
}
