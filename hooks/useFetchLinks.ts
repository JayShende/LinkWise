import axios from "axios";
import { useEffect, useState } from "react";

export type LinkData = {
  id: number;
  link: string;
  slug: string;
};

export function useFetchLinks() {
  const [links, setLinks] = useState<LinkData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        // Use generics to specify the expected response type
        const res = await axios.post<{ data: LinkData[] }>("/api/v1/getUrl");

        // TypeScript now knows res.data.data is of type LinkData[]
        setLinks(res.data.data);
        setIsLoading(false);
      } catch (err) {
        console.error("Failed to fetch links:", err);
      }
    };

    fetchLinks();
  }, []);

  return { links, isLoading, setLinks };
}