import React, { Component } from 'react'

export type ProjectCardType = {
  previewImage?: string,
  title: string,
  subtitle?: string,
  subtitleLink?: string,
  description?: string | JSX.Element,
  footer?: {
    link?: string,
    image: string,
    linkTitle: string
  }[]
}

export default class ProjectCard extends Component<ProjectCardType> {
  render() {
    const {title, subtitle, previewImage, subtitleLink, description, footer} = this.props;
    return (
      <div className="card">
        {
          previewImage? 
          <div className="card-image">
            <figure className="image is-4by3">
              <img src={previewImage} alt=""/>
            </figure>
          </div>
          : null
        }
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{title}</p>
              <p className="subtitle is-6">
                {
                  subtitleLink ? 
                    <a href={subtitleLink}>{subtitle}</a> 
                  : subtitle
                }
              </p>
            </div>
          </div>
          <div className="content">
            <p>{description}</p>
          </div>
        </div>
        <div className="card-footer">
          {footer ? footer.map((link)=>(
            <a href={link.link}>
              <img className="image is-32x32" title={link.linkTitle} src={link.image} alt=""/>
            </a>
          )) : null}
        </div>
      </div>
    )
  }
}
