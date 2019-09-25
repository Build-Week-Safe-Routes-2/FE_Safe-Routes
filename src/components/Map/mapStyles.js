export const lightMode = {
  styles: [
    {
      featureType: "all",
      stylers: [
        {
          saturation: 0
        },
        {
          hue: "#e7ecf0"
        }
      ]
    },
    {
      featureType: "road",
      stylers: [
        {
          saturation: -70
        }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "water",
      stylers: [
        {
          visibility: "simplified"
        },
        {
          saturation: -60
        }
      ]
    }
  ]
};

export const darkMode = {
  styles: [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36
        },
        {
          color: "#000000"
        },
        {
          lightness: 40
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on"
        },
        {
          color: "#000000"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 17
        },
        {
          weight: 1.2
        }
      ]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 20
        }
      ]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 21
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 17
        }
      ]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 29
        },
        {
          weight: 0.2
        }
      ]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 18
        }
      ]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 16
        }
      ]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 19
        }
      ]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000"
        },
        {
          lightness: 17
        }
      ]
    }
  ]
};
