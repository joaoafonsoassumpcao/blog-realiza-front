import * as React from "react";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActions, Button } from "@mui/material";

import Link from "next/link";

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={4}>
      <CardActionArea component="a" href={`/post/${post?.id}`}>
        <Card style={{ height: "100%" }}>
          <CardMedia
            sx={{ height: 200 }}
            image={post?.image}
            title={post?.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {post?.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post?.resumo}
            </Typography>
          </CardContent>
          <CardActions>
            <Link href={`/post/${post?.id}`} className="button-style">
              <Button size="small" style={{ color: "white" }}>
                LER MAIS
              </Button>
            </Link>
          </CardActions>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;
