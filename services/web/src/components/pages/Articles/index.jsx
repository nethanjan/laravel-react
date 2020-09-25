import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import Pagetemplate from "../../templates/PageTemplate";
import ListingTable from "../../orgamisms/Table/Table";

import { getArticles } from "../../../actions/articlesAction";

const listingTableHeader = [
  { id: 1, name: "Title", index: "title", type: "text" },
  { id: 2, name: "Author", index: "author", type: "text" },
  { id: 3, name: "URL", index: "url", type: "text" },
  { id: 4, name: "Content", index: "content", type: "text" },
  { id: 5, name: "Created At", index: "createdAt", type: "text" },
];

class ArticlePage extends Component {
  componentDidMount() {
    const { getArticles: fetchArticles } = this.props;
    fetchArticles();
  }

  render() {
    const { articles } = this.props;
    console.log(articles);
    return (
      <Pagetemplate className="article-page">
        <div className="container">
          <div className="page-options">
            <h2>Article Management</h2>
            <div className="row">
              <div className="col-md-4">
                <span className="float-right">
                  <a
                    className="btn btn-angle"
                    data-color="black"
                    href="/article/"
                  >
                    <span>Add Article</span>
                  </a>
                </span>
              </div>
            </div>

            {articles.articles && articles.articles.length ? (
              <div className="row">
                <ListingTable
                  headers={listingTableHeader}
                  tableData={articles.articles}
                />
              </div>
            ) : (
              <div className="row">Articles not found</div>
            )}
          </div>
        </div>
      </Pagetemplate>
    );
  }
}

ArticlePage.propTypes = {
  articles: PropTypes.shape({
    artciles: PropTypes.arrayOf(
      PropTypes.shape({
        author: PropTypes.string,
        content: PropTypes.string,
        createdAt: PropTypes.string,
        id: PropTypes.number,
        title: PropTypes.string,
        url: PropTypes.string,
      })
    ),
    error: PropTypes.shape({
      exception: PropTypes.string,
      message: PropTypes.string,
    }),
  }),
};

ArticlePage.defaultProps = {
  articles: {
    error: null,
  },
};

const mapStateToProps = (state) => ({
  articles: state.articles,
});

export default connect(mapStateToProps, { getArticles })(ArticlePage);
