import React from "react";
import * as d3 from "d3";
import "./AlphabetD3.css";
import SectionSVG from "../Section/Svg";

class AlphabetD3 extends React.Component {
  constructor(props) {
    super(props);
    // bind added methods that use this (lifecycle methods auto-bind)
    this.updateData = this.updateData.bind(this);
    this.createAlphabetD3 = this.createAlphabetD3.bind(this);
  }

  componentDidMount() {
    this.props.getWANIP();
    this.createAlphabetD3();
  }

  componentDidUpdate() {
    this.updateData(this.props.letters, this.g);
  }

  handleClick = () => {
    this.props.wanip &&
      this.props.getLetters(
        `http://${this.props.wanip}:8005/api/rd3server/abcs/`
      );
  };

  createAlphabetD3() {
    const node = this.node;
    var alphabet = [];

    var svg = d3.select(node),
      height = +svg.attr("height"),
      g = svg
        .append("g")
        .attr("transform", "translate(32," + height / 2 + ")")
        .attr("class", "abcd3");

    console.log(height);

    this.g = g;
    this.updateData(alphabet, g);
  }

  updateData(data, g) {
    var t = d3.transition().duration(750);

    // DATA JOIN
    // Join new data with old elements, if any.
    var text = g.selectAll("text").data(data, d => d);

    // EXIT old elements not prsent in new data.
    text
      .exit()
      .attr("class", "exit")
      .transition(t)
      .attr("y", 60)
      .style("fill-opacity", 1e-6)
      .remove();

    // UPDATE old elements not present in new data
    text
      .attr("class", "update")
      .attr("y", 0)
      .style("fill-opacity", 1)
      .transition(t)
      .attr("x", function(d, i) {
        return i * 32;
      });

    // ENTER new elements present in new data.
    text
      .enter()
      .append("text")
      .attr("class", "enter")
      .attr("dy", ".35em")
      .attr("y", -60)
      .attr("x", function(d, i) {
        return i * 32;
      })
      .style("fill-opacity", 1e-6)
      .text(function(d) {
        return d;
      })
      .transition(t)
      .attr("y", 0)
      .style("fill-opacity", 1);
  }

  render() {
    return (
      <SectionSVG
        innerRef={node => (this.node = node)}
        onClick={() => this.handleClick()}
        width={"100%"}
        height={400}
      />
    );
  }
}

export default AlphabetD3;
