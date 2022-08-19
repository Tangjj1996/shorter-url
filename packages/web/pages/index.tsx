import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";

import { addShortUrl } from "service/api";

function HomePage() {
  const [shortUrl, setShortUrl] = useState("");
  const [shortUrlRes, setShortUrlRes] = useState("");

  const handleClick = async () => {
    const result = await addShortUrl({
      destination: shortUrl,
    }).catch(e => console.error(e));
    if (result) {
      const { shortId } = result;
      setShortUrlRes(`https://localhost:3001/${shortId}`);
    }
  };
  return (
    <Box>
      <Input value={shortUrl} onChange={e => setShortUrl(e.target.value)} />
      <Button onClick={handleClick}>查询</Button>
      <Typography>{shortUrlRes}</Typography>
    </Box>
  );
}

export default HomePage;
