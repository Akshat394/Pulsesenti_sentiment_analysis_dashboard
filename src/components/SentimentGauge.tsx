import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

interface SentimentGaugeProps {
  sentiment: number; // -1 to 1 scale
  className?: string;
}

export function SentimentGauge({ sentiment, className = '' }: SentimentGaugeProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 200;
    const height = 200;
    const radius = Math.min(width, height) / 2 - 20;

    const g = svg.append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    // Create arc generator
    const arc = d3.arc()
      .innerRadius(radius - 30)
      .outerRadius(radius)
      .startAngle(-Math.PI / 2)
      .cornerRadius(5);

    // Background arc
    g.append('path')
      .datum({ endAngle: Math.PI / 2 })
      .style('fill', '#1f2937')
      .attr('d', arc as any);

    // Sentiment arc
    const sentimentAngle = -Math.PI / 2 + (sentiment + 1) * Math.PI / 2;
    const sentimentColor = sentiment > 0.2 ? '#10b981' : 
                          sentiment < -0.2 ? '#ef4444' : '#6b7280';

    g.append('path')
      .datum({ endAngle: sentimentAngle })
      .style('fill', sentimentColor)
      .style('filter', 'drop-shadow(0 0 8px currentColor)')
      .attr('d', arc as any);

    // Center text
    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-0.5em')
      .style('font-size', '24px')
      .style('font-weight', 'bold')
      .style('fill', sentimentColor)
      .text((sentiment * 100).toFixed(0));

    g.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '1em')
      .style('font-size', '12px')
      .style('fill', '#9ca3af')
      .text('SENTIMENT');

    // Needle
    const needleAngle = sentimentAngle;
    const needleLength = radius - 15;
    
    g.append('line')
      .attr('x1', 0)
      .attr('y1', 0)
      .attr('x2', needleLength * Math.cos(needleAngle))
      .attr('y2', needleLength * Math.sin(needleAngle))
      .style('stroke', '#ffffff')
      .style('stroke-width', 2)
      .style('stroke-linecap', 'round');

    g.append('circle')
      .attr('r', 4)
      .style('fill', '#ffffff');

  }, [sentiment]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <svg ref={svgRef} width="200" height="200" />
    </div>
  );
}