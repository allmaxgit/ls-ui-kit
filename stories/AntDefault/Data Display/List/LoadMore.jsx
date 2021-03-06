import React, { Component } from 'react';
import { List, Avatar, Button, Spin } from 'antd';

const data = [
  {gender: "female", name: {title: "miss", first: "beatriz", last: "roman"}, email: "afet.kuday@example.com", nat: "TR"},
  {gender: "male", name: {title: "mr", first: "leroy", last: "jenkins"}, email: "murat.gümüşpala@example.com", nat: "TR"},
  {gender: "male", name: {title: "mr", first: "justin", last: "tremblay"}, email: "raul.nieto@example.com", nat: "ES"},
  {gender: "female", name: {title: "mrs", first: "bendita", last: "pires"}, email: "melike.fahri@example.com", nat: "TR"},
  {gender: "male", name: {title: "ms", first: "brielle", last: "singh"}, email: "leo.tremblay@example.com", nat: "CA"}
]

class LoadMore extends Component {
  state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
  };

  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    ) : null;

    return (
      <section className="example">
        <h3 className="ex-title">Load More</h3>

        <List
          className="demo-loadmore-list"
          loading={loading}
          itemLayout="horizontal"
          loadMore={loadMore}
          dataSource={data}
          renderItem={item => (
            <List.Item actions={[<a>edit</a>, <a>more</a>]}>
              <List.Item.Meta
                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                title={<a href="#">{item.name.last}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
              />
              <div>content</div>
            </List.Item>
          )}
        />
      </section>
    );
  }

  componentDidMount() {
    this.setState({
      loading: false,
      data,
    });
  }

  getData = () => {
    this.state.data.push(...data);
    this.setState({
      data: [...this.state.data],
      loadingMore: false
    });
  }

  onLoadMore = () => this.setState({ loadingMore: true }, () => setTimeout(() => this.getData(), 1000));
}
 
export default LoadMore;