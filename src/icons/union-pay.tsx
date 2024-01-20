import React from 'react';

function UnionPay({ formattedClassName }: { formattedClassName: string }) {
  return (
    <svg
      className={`${formattedClassName}`}
      viewBox="0 0 780 500"
      xmlns="https://www.w3.org/2000/svg"
    >
      <g fill="none" fillRule="evenodd">
        <rect x="15" y="15" width="720" height="441" rx="25" stroke="#393939" strokeWidth="30" />
        <path
          d="M201.81 55h142.393c19.87 0 32.287 16.406 27.63 36.47L305.5 378.948c-4.656 20.064-24.629 36.47-44.498 36.47H118.61c-19.87 0-32.287-16.406-27.63-36.47L157.311 91.47C161.968 71.302 181.837 55 201.706 55h.104z"
          fill="#7E7E7E"
        />
        <path
          d="M331.75 55h163.815c19.869 0 10.866 16.406 6.209 36.47L435.44 378.948c-4.657 20.064-3.208 36.47-23.077 36.47H248.549c-19.972 0-32.287-16.406-27.527-36.47L287.356 91.47C292.012 71.302 311.88 55 331.854 55h-.104z"
          fill="#393939"
        />
        <path
          d="m489.82 55h142.39c19.869 0 32.287 16.406 27.63 36.47l-66.333 287.48c-4.657 20.064-24.63 36.47-44.498 36.47h-142.39c-19.972 0-32.287-16.406-27.63-36.47l66.333-287.48c4.657-20.168 24.526-36.47 44.394-36.47h0.104z"
          fill="#000"
        />
        <path
          d="M465.905 326.015h13.453l3.829-13.063h-13.35l-3.932 13.063zm10.762-35.948l-4.657 15.466s5.071-2.613 7.865-3.449c2.794-.627 6.933-1.15 6.933-1.15l3.208-10.763h-13.452l.103-.104zm6.727-22.154l-4.45 14.839s4.967-2.3 7.761-3.03c2.794-.732 6.933-.941 6.933-.941l3.208-10.764h-13.349l-.103-.104zm29.7 0l-17.386 57.997h4.657l-3.622 12.017h-4.657l-1.138 3.658H474.39l1.139-3.658H442l3.311-11.076h3.415l17.593-58.938L469.837 256h16.868l-1.76 5.956s4.45-3.239 8.797-4.389c4.243-1.149 28.665-1.567 28.665-1.567l-3.622 11.808h-5.795l.103.105z"
          fill="#FEFEFE"
        />
        <path
          d="M520 256h18.006l.207 6.792c-.103 1.15.828 1.672 3.001 1.672h3.622l-3.311 11.182h-9.728c-8.382.627-11.59-3.03-11.383-7.106l-.31-12.436L520 256zm2.216 53.2h-17.178l2.897-9.927h19.662l2.794-9.092H511.04L514.351 279h53.812l-3.311 11.181h-18.11l-2.794 9.092h18.11l-3.002 9.927h-19.558l-3.518 4.18h7.968l1.966 12.54c.207 1.254.207 2.09.62 2.613.415.418 2.795.627 4.14.627h2.38l-3.725 12.226h-6.106c-.93 0-2.38-.104-4.346-.104-1.863-.21-3.104-1.254-4.346-1.881-1.139-.523-2.794-1.881-3.208-4.285l-1.863-12.54-8.9 12.331c-2.794 3.867-6.622 6.897-13.142 6.897H495l3.311-10.868h4.76c1.346 0 2.588-.522 3.52-1.045.93-.418 1.758-.836 2.586-2.194l13.04-18.497zM334.314 282h45.429l-3.312 10.972h-18.11l-2.793 9.3h18.627l-3.415 11.287h-18.524l-4.553 15.152c-.517 1.672 4.45 1.881 6.209 1.881l9.314-1.254-3.726 12.54h-20.904c-1.655 0-2.897-.209-4.76-.627-1.76-.418-2.587-1.254-3.311-2.403-.725-1.254-1.967-2.195-1.139-4.912l6.002-20.064H325l3.415-11.495h10.348l2.794-9.3H331.21l3.312-10.973-.207-.104zm31.387-19.835h18.627l-3.415 11.39h-25.457l-2.794 2.404c-1.242 1.15-1.552.732-3.105 1.568-1.448.731-4.45 2.194-8.382 2.194H333l3.311-10.972h2.484c2.07 0 3.519-.21 4.243-.627.828-.523 1.76-1.672 2.69-3.553l4.657-8.569h18.524l-3.208 6.27v-.105zm35.108 18.81s5.07-4.702 13.763-6.165c1.966-.418 14.384-.21 14.384-.21l1.863-6.27h-26.181l-3.83 12.75v-.105zm24.629 4.807h-25.975l-1.552 5.33h22.56c2.69-.314 3.208.104 3.415-.105l1.655-5.225h-.103zm-33.736-29.678h15.833l-2.276 8.047s4.967-4.076 8.485-5.539c3.519-1.254 11.383-2.508 11.383-2.508l25.664-.104-8.796 29.469c-1.449 5.016-3.208 8.255-4.243 9.823-.93 1.463-2.07 2.821-4.346 4.075-2.173 1.15-4.14 1.881-6.002 1.986-1.656.104-4.346.209-7.865.209h-24.732l-6.934 23.303c-.62 2.299-.931 3.448-.517 4.075.31.523 1.242 1.15 2.38 1.15l10.866-1.045-3.726 12.749h-12.21c-3.933 0-6.727-.105-8.693-.21-1.863-.208-3.83 0-5.175-1.044-1.138-1.045-2.897-2.404-2.794-3.762.104-1.254.621-3.344 1.45-6.27l22.248-74.404z"
          fill="#FEFEFE"
        />
        <path
          d="M437.84 303l-1.449 7.106c-.62 2.194-1.138 3.866-2.794 5.33-1.759 1.462-3.725 3.03-8.485 3.03l-8.796.418-.104 7.942c-.103 2.194.518 1.985.828 2.403.414.418.724.523 1.138.732l2.794-.21 8.383-.417-3.519 11.704h-9.624c-6.726 0-11.797-.21-13.35-1.463-1.655-1.045-1.862-2.3-1.862-4.598l.62-31.141h15.42l-.207 6.374h3.725c1.242 0 2.174-.104 2.691-.418.517-.313.828-.836 1.035-1.567l1.552-5.016h12.108l-.104-.209zM218.47 147c-.517 2.508-10.451 48.592-10.451 48.592-2.174 9.3-3.726 15.989-8.9 20.273-3.001 2.508-6.52 3.657-10.555 3.657-6.52 0-10.245-3.239-10.866-9.404l-.104-2.09s1.966-12.436 1.966-12.54c0 0 10.349-42.009 12.212-47.548.103-.313.103-.522.103-.627-20.18.21-23.801 0-24.008-.313-.104.418-.621 3.03-.621 3.03L156.69 197.37l-.932 3.97L154 214.508c0 3.866.724 7.105 2.277 9.718 4.863 8.569 18.627 9.823 26.388 9.823 10.038 0 19.455-2.195 25.767-6.061 11.073-6.584 13.97-16.929 16.454-26.02l1.242-4.703s10.659-43.576 12.522-49.219c.103-.314.103-.523.207-.627-14.695.104-18.938 0-20.387-.314V147zm59.03 86.623c-7.141-.105-9.728-.105-18.11.313l-.311-.627c.724-3.24 1.552-6.374 2.173-9.614l1.035-4.389c1.552-6.792 3.001-14.839 3.208-17.242.207-1.463.62-5.12-3.519-5.12-1.759 0-3.518.835-5.38 1.671-1.036 3.658-3.002 13.899-4.037 18.497-2.07 9.823-2.173 10.972-3.104 15.78l-.621.626c-7.347-.104-9.934-.104-18.42.314L230 233.1c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.45-21.84 5.38-29.887l.725-.418c8.279-1.149 10.245-1.463 19.248-3.239l.724.836-1.345 5.016c1.552-.94 3.001-1.881 4.553-2.613 4.243-2.09 8.9-2.717 11.487-2.717 3.932 0 8.279 1.15 10.038 5.748 1.656 4.075.62 9.091-1.656 19.019l-1.138 5.016c-2.277 11.077-2.69 13.062-3.933 20.586l-.827.627.103.105zm29.058.027c-4.346 0-7.14-.104-9.83 0-2.691 0-5.278.21-9.314.314l-.207-.314-.207-.418c1.138-4.18 1.656-5.643 2.277-7.106.517-1.463 1.034-2.926 2.07-7.21 1.241-5.539 2.069-9.405 2.586-12.854.621-3.24.932-6.06 1.346-9.3l.31-.209.31-.314c4.347-.627 7.038-1.045 9.832-1.463 2.794-.418 5.691-.94 10.141-1.776l.207.418.103.418-2.483 10.345c-.828 3.449-1.656 6.897-2.38 10.346-1.553 7.315-2.277 10.032-2.587 12.017-.414 1.881-.518 2.822-1.139 6.584l-.414.313-.414.314-.207-.105zm45.941-25.675c-.31 1.881-1.966 8.883-4.139 11.809-1.552 2.194-3.312 3.553-5.381 3.553-.621 0-4.14 0-4.243-5.33 0-2.612.517-5.33 1.138-8.255 1.863-8.465 4.14-15.466 9.831-15.466 4.45 0 4.76 5.225 2.794 13.69zm18.73.836c2.484-11.077.518-16.302-1.862-19.437-3.725-4.807-10.348-6.374-17.178-6.374-4.14 0-13.867.418-21.525 7.524-5.484 5.12-8.071 12.122-9.52 18.81-1.553 6.792-3.312 19.019 7.865 23.617 3.414 1.463 8.382 1.88 11.59 1.88 8.175 0 16.557-2.298 22.87-8.986 4.863-5.434 7.036-13.585 7.864-17.034h-.103zm174.433 26.08c-8.693-.104-11.176-.104-19.145.314l-.517-.627c2.173-8.256 4.346-16.616 6.313-24.976 2.483-10.868 3.104-15.466 3.932-21.84l.62-.523c8.59-1.254 10.97-1.567 19.973-3.239l.207.731c-1.656 6.897-3.208 13.69-4.864 20.482-3.311 14.317-4.45 21.632-5.691 29.156l-.828.627v-.105z"
          fill="#FEFEFE"
        />
        <path
          d="M533.16 209.374c-.414 1.776-2.07 8.882-4.243 11.808-1.449 2.09-4.967 3.449-6.933 3.449-.621 0-4.036 0-4.243-5.225 0-2.613.517-5.33 1.138-8.256 1.863-8.255 4.14-15.257 9.831-15.257 4.45 0 6.416 5.12 4.45 13.585v-.104zm17.075.836c2.483-11.077-7.658-.94-9.21-4.598-2.484-5.748-.932-17.243-10.866-21.109-3.829-1.568-12.832.418-20.49 7.524-5.381 5.016-8.072 12.017-9.52 18.705-1.553 6.688-3.312 19.02 7.76 23.304 3.52 1.567 6.727 1.985 9.935 1.776 11.177-.627 19.662-17.66 25.975-24.348 4.863-5.33 5.691 1.985 6.416-1.254zm-129.943 23.413c-7.14-.105-9.624-.105-18.006.313l-.31-.627c.724-3.24 1.552-6.374 2.276-9.614l.931-4.389c1.553-6.792 3.105-14.839 3.208-17.242.207-1.463.621-5.12-3.415-5.12-1.759 0-3.621.835-5.38 1.671-.932 3.658-3.002 13.899-4.037 18.497-1.966 9.823-2.173 10.972-3.104 15.78l-.621.626c-7.347-.104-9.934-.104-18.42.314L373 233.1c1.449-5.852 2.794-11.704 4.14-17.556 3.518-15.78 4.346-21.84 5.38-29.887l.621-.418c8.28-1.149 10.349-1.463 19.248-3.239l.725.836-1.242 5.016c1.449-.94 3.001-1.881 4.45-2.613 4.243-2.09 8.9-2.717 11.486-2.717 3.933 0 8.176 1.15 10.038 5.748 1.656 4.075.518 9.091-1.759 19.019l-1.138 5.016c-2.38 11.077-2.69 13.062-3.933 20.586l-.827.627.103.105zm62.001-86.519l-6.002.105c-15.523.209-21.732.104-24.215-.209-.207 1.15-.621 3.135-.621 3.135s-5.588 25.916-5.588 26.02c0 0-13.246 55.176-13.867 57.788 13.556-.209 19.041-.209 21.421.105.518-2.613 3.622-17.974 3.726-17.974 0 0 2.69-11.286 2.794-11.704 0 0 .827-1.15 1.655-1.672h1.242c11.694 0 24.836 0 35.185-7.628 7.037-5.225 11.797-13.063 13.97-22.468.517-2.299.931-5.016.931-7.837 0-3.658-.724-7.21-2.794-10.032-5.277-7.42-15.73-7.524-27.837-7.629zm7.761 27.066c-1.241 5.747-4.967 10.659-9.727 12.958-3.932 1.985-8.693 2.194-13.66 2.194h-3.208l.207-1.254s5.899-25.916 5.899-25.811l.207-1.359.103-1.045 2.38.21s12.211 1.044 12.418 1.044c4.76 1.881 6.83 6.688 5.381 13.063zm127.207 8.666l-.724-.836c-8.796 1.776-10.452 2.09-18.524 3.24l-.62.626c0 .105-.104.21-.104.418v-.104c-6.002 14.107-5.899 11.077-10.762 22.154 0-.523 0-.836-.104-1.359l-1.242-24.035-.724-.836c-9.314 1.777-9.52 2.09-18.006 3.24l-.621.627c-.104.313-.104.627-.104.94l.104.105c1.035 5.538.828 4.284 1.863 12.958.517 4.284 1.138 8.569 1.655 12.749.828 7.106 1.346 10.554 2.38 21.318-5.795 9.614-7.14 13.271-12.728 21.735l.31.836c8.383-.313 10.245-.313 16.454-.313l1.346-1.568c4.656-10.136 40.255-71.79 40.255-71.79l-.104-.105zm-302.717 6.922c4.76-3.344 5.38-7.942 1.345-10.345-4.036-2.404-11.176-1.672-15.937 1.672-4.76 3.24-5.277 7.837-1.241 10.345 3.932 2.3 11.072 1.672 15.833-1.672z"
          fill="#FEFEFE"
        />
        <path
          d="M575.735 256.104l-6.934 12.018c-2.173 4.075-6.312 7.21-12.728 7.21L545 275.123l3.208-10.868h2.173c1.138 0 1.966-.104 2.587-.418.621-.209.932-.627 1.449-1.254l4.14-6.583h17.281l-.103.104z"
          fill="#FEFEFE"
        />
      </g>
    </svg>
  );
}

export default UnionPay;