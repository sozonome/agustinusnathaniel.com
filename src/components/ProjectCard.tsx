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
  disabled?: boolean,
}

export default class ProjectCard extends Component<ProjectCardType> {
  render() {
    const {title, subtitle, previewImage, subtitleLink, description, footer, disabled} = this.props;
    return (
      disabled ? 
        <div className="card sect">
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">Coming Soon</p>
                <p className="subtitle is-6">
                  {
                    subtitleLink ? 
                      <p>Work in Progress</p> 
                    : subtitle
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      : 
      <div className="card sect">
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
                    <a href={subtitleLink} target="_blank">{subtitle}</a> 
                  : subtitle
                }
              </p>
            </div>
          </div>
          <div className="content">
            <p>{description}</p>
          </div>
        </div>
          {
            footer ? 
              <div className="card-footer padd">
                {footer.map((link)=>(
                  <a href={link.link} target="_blank">
                    <img className="image is-32x32" title={link.linkTitle} src={link.image} alt=""/>
                  </a>
                ))}
              </div> 
              : null
          }
      </div>
    )
  }
}
