import React from "react";
import './styles.scss';
import { Link } from "react-router-dom";
import Template from "../../components/Template";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import NeonButton from '../../components/NeonButton';

export default () => {
  return <Template className="page-404">
    <FontAwesomeIcon className="map-location-icon" icon={faMapMarkerAlt} />
    <h1 className="page-not-found-title">Page not found</h1>
    <Link className="return-home-link" to="/items">
      <NeonButton neonColor="red">Return to home</NeonButton>
    </Link>
  </Template>
}