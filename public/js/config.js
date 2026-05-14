var timeout_config = {
	"idleDurationSecs": "7",
	"msg_counter": "15"
};

var page_config = [
	{
		"language_id": "1",
		"country_shortcode": "DE",
		"language_name": "Deutsch",
		"timeout_message" : "Zeitlimit (in Sekunden): ",
		"action_message" : "Weiterleitung zur Startseite, zum Abbrechen hier klicken/bewegen Sie die Maus auﬂerhalb des PDF!",
		"flag_path" : "flags/DE.jpg",
		"buttons": [
			{
				"button_label": "Besucher Handwerker",
				"button_position": "left",
				"button_id": "1",
				"file_Handwerker":"DE_NCAS_Sicherheitsunterweisung Besucher, Handwerker.pdf"
			},
			{
				"button_label": "Lieferanten Abholer",
				"button_position": "right",
				"button_id": "2",
				"file_Handwerker":"DE_NCAS_Sicherheitsunterweisung Lieferanten, Abholer.pdf"
			}
		]		
	},
	{
		"language_id": "2",
		"country_shortcode": "EN",
		"language_name": "English",
		"timeout_message" : "Timeout (in seconds): ",
		"action_message" : "Redirects to start page, To cancel click here/mousemove outside the PDF!",
		"flag_path" : "flags/EN.jpg",
		"buttons": [
			{
				"button_label": "Visitor Handyman",
				"button_position": "left",
				"button_id": "1",
				"file_Handwerker":"EN_NCAS_Sicherheitsunterweisung Besucher, Handwerker.pdf"
			},
			{
				"button_label": "Delivery Pickup",
				"button_position": "right",
				"button_id": "2",
				"file_Handwerker":"EN_NCAS_Sicherheitsunterweisung Lieferanten, Abholer.pdf"
			}
		]		
	}
];