<?php

namespace App\Services;

class CompaniesService
{
    private static function insert_spaces_before_camel_case($str)
    {
        $result = '';
        $str_length = strlen($str);

        // Loop through each character in the string

        if ($str != 'USA' && $str != 'Bosnia & Herzegovina' && $str!='Bosnia and Herzegovina') {
            for ($i = 0; $i < $str_length; $i++) {
                $char = $str[$i];

                // Check if the character is a capital letter and not the first letter in the string
                if (ctype_upper($char) && $i != 0) {
                    // If it is, add a space before it
                    $result .= ' ';
                }

                // Add the character to the result string
                $result .= $char;
            }
        }
        else{
            $result = $str;}
        return $result;
    }


    public static function importCountries(string $countryNames, $single = false): ?string
    {

        $countryListJSON = self::getCountryListArray();
        $old_substring = 'Bosnia & Herzegovina';
        $new_substring = 'Bosnia and Herzegovina';
        if (strpos($countryNames, $old_substring) !== false){
            $countryNames = str_replace($old_substring, $new_substring, $countryNames);
        }
        else{
           $countryNames = str_replace(' ', '', $countryNames);
        }


/*        if (!preg_match('/^[a-zA-Z,]+$/', $countryNames)) {
            \Log::warning('Invalid country names provided: ' . $countryNames);
            return null;
        }*/

        $countryCodes = [];
        $countryNames = explode(',', $countryNames);
        foreach ($countryNames as $countryName) {
            $countryCode = self::getCountryCode($countryName,$countryListJSON);
            if ($countryCode) {
                $countryCodes[] = $countryCode;
            } else {
                \Log::warning("Country code not found for country: {$countryName}");
            }
        }

        if($single){
            return $countryCodes[0];
        }
        return implode(',', $countryCodes);
    }

    private static function getCountryCode($country, $countryListArray)
    {
        if($country != 'Bosnia and Herzegovina'){
            $country = self::insert_spaces_before_camel_case($country);
            foreach ($countryListArray as $countryData) {
                if (strcasecmp($country, $countryData['text']) === 0) {
                    return $countryData['value'];
                }
            }
        }
        else{
            return 'BA';
        }



        return null;
    }

    private static function getCountryListArray() {
        return
        [[  'text'=> 'Afghanistan', 'value'=> 'AF' ],
         [  'text'=> 'Åland Islands','value'=> 'AX'],
         [  'text'=> 'Albania','value'=> 'AL'],
         [  'text'=> 'Algeria','value'=> 'DZ'],
         [  'text'=> 'American Samoa','value'=> 'AS'],
         [  'text'=> 'Andorra','value'=> 'AD'],
         [  'text'=> 'Angola','value'=> 'AO'],
         [  'text'=> 'Anguilla','value'=> 'AI'],
         [  'text'=> 'Antarctica','value'=> 'AQ'],
         [  'text'=> 'Antigua and Barbuda','value'=> 'AG'],
         [  'text'=> 'Argentina','value'=> 'AR'],
         [  'text'=> 'Armenia','value'=> 'AM'],
         [  'text'=> 'Aruba','value'=> 'AW'],
         [  'text'=> 'Australia','value'=> 'AU'],
         [  'text'=> 'Austria','value'=> 'AT'],
         [  'text'=> 'Azerbaijan','value'=> 'AZ'],
         [  'text'=> 'Bahamas','value'=> 'BS'],
         [  'text'=> 'Bahrain','value'=> 'BH'],
         [  'text'=> 'Bangladesh','value'=> 'BD'],
         [  'text'=> 'Barbados','value'=> 'BB'],
         [  'text'=> 'Belarus','value'=> 'BY'],
         [  'text'=> 'Belgium','value'=> 'BE'],
         [  'text'=> 'Belize','value'=> 'BZ'],
         [  'text'=> 'Benin','value'=> 'BJ'],
         [  'text'=> 'Bermuda','value'=> 'BM'],
         [  'text'=> 'Bhutan','value'=> 'BT'],
         [  'text'=> 'Bolivia, Plurinational State of','value'=> 'BO'],
         [  'text'=> 'Bonaire, Sint Eustatius and Saba','value'=> 'BQ'],
         [  'text'=> 'Bosnia and Herzegovina','value'=> 'BA'],
         [  'text'=> 'Bosnia & Herzegovina','value'=> 'BA'],
         [  'text'=> 'Botswana','value'=> 'BW'],
         [  'text'=> 'Bouvet Island','value'=> 'BV'],
         [  'text'=> 'Brazil','value'=> 'BR'],
         [  'text'=> 'British Indian Ocean Territory','value'=> 'IO'],
         [  'text'=> 'Brunei Darussalam','value'=> 'BN'],
         [  'text'=> 'Bulgaria','value'=> 'BG'],
         [  'text'=> 'Burkina Faso','value'=> 'BF'],
         [  'text'=> 'Burundi','value'=> 'BI'],
         [  'text'=> 'Cambodia','value'=> 'KH'],
         [  'text'=> 'Cameroon','value'=> 'CM'],
         [  'text'=> 'Canada','value'=>'CA'],
         [  'text'=> 'Cape Verde','value'=>'CV'],
         [  'text'=> 'Cayman Islands','value'=>'KY'],
         [  'text'=> 'Central African Republic','value'=>'CF'],
         [  'text'=> 'Chad','value'=>'TD'],
         [  'text'=> 'Chile','value'=>'CL'],
         [  'text'=> 'China','value'=>'CN'],
         [  'text'=> 'Christmas Island','value'=>'CX'],
         [  'text'=> 'Cocos (Keeling) Islands','value'=>'CC'],
         [  'text'=> 'Colombia','value'=>'CO'],
         [  'text'=> 'Comoros','value'=>'KM'],
         [  'text'=> 'Congo','value'=>'CG'],
         [  'text'=> 'Congo, the Democratic Republic of the','value'=>'CD'],
         [  'text'=> 'Cook Islands','value'=>'CK'],
         [  'text'=> 'Costa Rica','value'=>'CR'],
         [  'text'=> 'Côte dIvoire','value'=>'CI'],
         [  'text'=> 'Croatia','value'=>'HR'],
         [  'text'=> 'Cuba','value'=>'CU'],
         [  'text'=> 'Curaçao','value'=>'CW'],
         [  'text'=> 'Cyprus','value'=>'CY'],
         [  'text'=> 'Czech Republic','value'=>'CZ'],
         [  'text'=> 'Denmark','value'=>'DK'],
         [  'text'=> 'Deutschland','value'=>'DE'],
         [  'text'=> 'Djibouti','value'=>'DJ'],
         [  'text'=> 'Dominica','value'=>'DM'],
         [  'text'=> 'Dominican Republic','value'=>'DO'],
         [  'text'=> 'Ecuador','value'=>'EC'],
        [  'text'=> 'Egypt','value'=>'EG'],
        [  'text'=> 'El Salvador', 'value'=>'SV'],
        [  'text'=> 'Equatorial Guinea','value'=>'GQ'],
        [  'text'=> 'Eritrea','value'=>'ER'],
        [  'text'=> 'Estonia','value'=>'EE'],
         [  'text'=> 'Ethiopia','value'=>'ET'],
         [  'text'=> 'Falkland Islands (Malvinas)','value'=>'FK'],
         [  'text'=> 'Faroe Islands','value'=>'FO'],
         [  'text'=> 'Fiji','value'=>'FJ'],
         [  'text'=> 'Finland','value'=>'FI'],
         [  'text'=> 'France','value'=>'FR'],
         [  'text'=> 'French Guiana','value'=>'GF'],
         [  'text'=> 'French Polynesia','value'=>'PF'],
         [  'text'=> 'French Southern Territories','value'=>'TF'],
         [  'text'=> 'Gabon','value'=>'GA'],
         [  'text'=> 'Gambia','value'=>'GM'],
         [  'text'=> 'Georgia','value'=>'GE'],
         [  'text'=> 'Germany','value'=>'DE'],
         [  'text'=> 'Ghana','value'=>'GH'],
         [  'text'=> 'Gibraltar','value'=>'GI'],
         [  'text'=> 'Greece','value'=>'GR'],
         [  'text'=> 'Greenland','value'=>'GL'],
         [  'text'=> 'Grenada','value'=>'GD'],
          [ 'text'=> 'Guadeloupe','value'=>'GP'],
         [  'text'=> 'Guam','value'=>'GU'],
         [  'text'=> 'Guatemala','value'=>'GT'],
         [  'text'=> 'Guernsey','value'=>'GG'],
         [  'text'=> 'Guinea','value'=>'GN'],
         [  'text'=> 'Guinea-Bissau','value'=>'GW'],
         [  'text'=> 'Guyana','value'=>'GY'],
         [  'text'=> 'Haiti','value'=>'HT'],
        [  'text'=> 'Heard Island and McDonald Islands','value'=>'HM'],
         [  'text'=> 'Holy See (Vatican City State)','value'=>'VA'],
  [  'text'=> 'Honduras','value'=>'HN'],
   [  'text'=> 'Hong Kong','value'=>'HK'],
   [  'text'=> 'Hungary','value'=>'HU'],
    ['text'=> 'Iceland','value'=>'IS'],
    ['text'=> 'India','value'=>'IN'],
   [  'text'=> 'Indonesia','value'=>'ID'],
   [  'text'=> 'Iran, Islamic Republic of','value'=>'IR'],
   [  'text'=> 'Iraq','value'=>'IQ'],
   [  'text'=> 'Ireland','value'=>'IE'],
   [  'text'=> 'Isle of Man','value'=>'IM'],
   [  'text'=> 'Israel','value'=>'IL'],
   [  'text'=> 'Italy','value'=>'IT'],
   [  'text'=> 'Jamaica','value'=>'JM'],
   [  'text'=> 'Japan','value'=>'JP'],
   [  'text'=> 'Jersey','value'=>'JE'],
   [  'text'=> 'Jordan','value'=>'JO'],
   [  'text'=> 'Kazakhstan','value'=>'KZ'],
   [  'text'=> 'Kenya','value'=>'KE'],
   [  'text'=> 'Kiribati','value'=>'KI'],
   [  'text'=> 'Korea, Democratic Peoples Republic of','value'=>'KP'],
   [  'text'=> 'Korea, Republic of','value'=>'KR'],
   [  'text'=> 'Kosovo','value'=>'XK'],

   [  'text'=> 'Kuwait','value'=>'KW'],
   [  'text'=> 'Kyrgyzstan','value'=>'KG'],
   [  'text'=> 'Lao Peoples Democratic Republic','value'=>'LA'],
   [  'text'=> 'Latvia','value'=>'LV'],
   [  'text'=> 'Lebanon','value'=>'LB'],
   [  'text'=> 'Lesotho','value'=>'LS'],
   [  'text'=> 'Liberia','value'=>'LR'],
   [  'text'=> 'Libya','value'=>'LY'],
   [  'text'=> 'Liechtenstein','value'=>'LI'],
   [  'text'=> 'Lithuania','value'=>'LT'],
   [  'text'=> 'Luxembourg','value'=>'LU'],
   [  'text'=> 'Macao','value'=>'MO'],
   [  'text'=> 'Macedonia, the Former Yugoslav Republic of','value'=>'MK'],
   [  'text'=> 'Madagascar','value'=>'MG'],
   [  'text'=> 'Malawi','value'=>'MW'],
   [  'text'=> 'Malaysia','value'=>'MY'],
   [  'text'=> 'Maldives','value'=>'MV'],
   [  'text'=> 'Mali','value'=>'ML'],
   [  'text'=> 'Malta','value'=>'MT'],
   [  'text'=> 'Marshall Islands','value'=>'MH'],
   [  'text'=> 'Martinique','value'=>'MQ'],
   [  'text'=> 'Mauritania','value'=>'MR'],
   [  'text'=> 'Mauritius','value'=>'MU'],
   [  'text'=> 'Mayotte','value'=>'YT'],
   [  'text'=> 'Mexico','value'=>'MX'],
   [  'text'=> 'Micronesia, Federated States of','value'=>'FM'],
   [  'text'=> 'Moldova, Republic of','value'=>'MD'],
   [  'text'=> 'Monaco','value'=>'MC'],
   [  'text'=> 'Mongolia','value'=>'MN'],
   [  'text'=> 'Montenegro','value'=>'ME'],
   [  'text'=> 'Montserrat','value'=>'MS'],
   [  'text'=> 'Morocco','value'=>'MA'],
   [  'text'=> 'Mozambique','value'=>'MZ'],
   [  'text'=> 'Myanmar','value'=>'MM'],
   [  'text'=> 'Myanmar (Burma)','value'=>'MM'],
   [  'text'=> 'Namibia','value'=>'NA'],
   [  'text'=> 'Nauru','value'=>'NR'],
   [  'text'=> 'Nepal','value'=>'NP'],
   [  'text'=> 'Netherlands','value'=>'NL'],
   [  'text'=> 'New Caledonia','value'=>'NC'],
   [  'text'=> 'New Zealand','value'=>'NZ'],
   [  'text'=> 'Nicaragua','value'=>'NI'],
   [  'text'=> 'Niger','value'=>'NE'],
   [  'text'=> 'Nigeria','value'=>'NG'],
   [  'text'=> 'Niue','value'=>'NU'],
   [  'text'=> 'Norfolk Island','value'=>'NF'],
   [  'text'=> 'Northern Mariana Islands','value'=>'MP'],
   [  'text'=> 'Norway','value'=>'NO'],
   [  'text'=> 'North Macedonia','value'=>'MKD'],
   [  'text'=> 'Oman','value'=>'OM'],
   [  'text'=> 'Pakistan','value'=>'PK'],
   [  'text'=> 'Palau','value'=>'PW'],
   [  'text'=> 'Palestine, State of','value'=>'PS'],
   [  'text'=> 'Panama','value'=>'PA'],
   [  'text'=> 'Papua New Guinea','value'=>'PG'],
   [  'text'=> 'Paraguay','value'=>'PY'],
   [  'text'=> 'Peru','value'=>'PE'],
   [  'text'=> 'Philippines','value'=>'PH'],
   [  'text'=> 'Pitcairn','value'=>'PN'],
   [  'text'=> 'Poland','value'=>'PL'],
   [  'text'=> 'Portugal','value'=>'PT'],
   [  'text'=> 'Puerto Rico','value'=>'PR'],
   [  'text'=> 'Qatar','value'=>'QA'],
   [  'text'=> 'Réunion','value'=>'RE'],
   [  'text'=> 'Romania','value'=>'RO'],
   [  'text'=> 'Russia','value'=>'RU'],

   [  'text'=> 'Russian Federation','value'=>'RU'],
   [  'text'=> 'Rwanda','value'=>'RW'],
   [  'text'=> 'Saint Barthélemy','value'=>'BL'],
   [  'text'=> 'Saint Helena, Ascension and Tristan da Cunha','value'=>'SH'],
   [  'text'=> 'Saint Kitts and Nevis','value'=>'KN'],
   [  'text'=> 'Saint Lucia','value'=>'LC'],
   [  'text'=> 'Saint Martin (French part)','value'=>'MF'],
   [  'text'=> 'Saint Pierre and Miquelon','value'=>'PM'],
   [  'text'=> 'Saint Vincent and the Grenadines','value'=>'VC'],
   [  'text'=> 'Samoa','value'=>'WS'],
   [  'text'=> 'San Marino','value'=>'SM'],
   [  'text'=> 'Sao Tome and Principe','value'=>'ST'],
   [  'text'=> 'Saudi Arabia','value'=>'SA'],
   [  'text'=> 'Senegal','value'=>'SN'],
   [  'text'=> 'Serbia','value'=>'RS'],
   [  'text'=> 'Seychelles','value'=>'SC'],
   [  'text'=> 'Sierra Leone','value'=>'SL'],
   [  'text'=> 'Singapore','value'=>'SG'],
   [  'text'=> 'Sint Maarten (Dutch part)','value'=>'SX'],
   [  'text'=> 'Slovakia','value'=>'SK'],
   [  'text'=> 'Slovenia','value'=>'SI'],
   [  'text'=> 'Solomon Islands','value'=>'SB'],
   [  'text'=> 'Somalia','value'=>'SO'],
   [  'text'=> 'South Africa','value'=>'ZA'],
   [  'text'=> 'South Georgia and the South Sandwich Islands','value'=>'GS'],
   [  'text'=> 'South Sudan','value'=>'SS'],
   [  'text'=> 'South Korea','value'=>'KOR'],
   [  'text'=> 'Spain','value'=>'ES'],
   [  'text'=> 'Sri Lanka','value'=>'LK'],
   [  'text'=> 'Sudan','value'=>'SD'],
   [  'text'=> 'Suriname','value'=>'SR'],
   [  'text'=> 'Svalbard and Jan Mayen','value'=>'SJ'],
   [  'text'=> 'Swaziland','value'=>'SZ'],
   [  'text'=> 'Sweden','value'=>'SE'],
   [  'text'=> 'Switzerland','value'=>'CH'],
   [  'text'=> 'Syrian Arab Republic','value'=>'SY'],
   [  'text'=> 'Taiwan, Province of China','value'=>'TW'],
   [  'text'=> 'Taiwan','value'=>'TW'],
   [  'text'=> 'Tajikistan','value'=>'TJ'],
    ['text'=> 'Tanzania, United Republic of','value'=>'TZ'],
   [  'text'=> 'Thailand','value'=>'TH'],
   [  'text'=> 'Timor-Leste','value'=>'TL'],
   [  'text'=> 'Togo','value'=>'TG'],
   [  'text'=> 'Tokelau','value'=>'TK'],
   [  'text'=> 'Tonga','value'=>'TO'],
   [  'text'=> 'Trinidad and Tobago','value'=>'TT'],
   [  'text'=> 'Tunisia','value'=>'TN'],
   [  'text'=> 'Turkey','value'=>'TR'],
   [  'text'=> 'Turkmenistan','value'=>'TM'],
   [  'text'=> 'Turks and Caicos Islands','value'=>'TC'],
   [  'text'=> 'Tuvalu','value'=>'TV'],
   [  'text'=> 'Uganda','value'=>'UG'],
   [  'text'=> 'Ukraine','value'=>'UA'],
   [  'text'=> 'United Arab Emirates','value'=>'AE'],
   [  'text'=> 'United Kingdom','value'=>'GB'],
   [  'text'=> 'United States','value'=>'US'],
   [  'text'=> 'USA','value'=>'US'],
   [  'text'=> 'United States Minor Outlying Islands','value'=>'UM'],
   [  'text'=> 'Uruguay','value'=>'UY'],
   [  'text'=> 'Uzbekistan','value'=>'UZ'],
   [  'text'=> 'Vanuatu','value'=>'VU'],
   [  'text'=> 'Venezuela, Bolivarian Republic of','value'=>'VE'],
   [  'text'=> 'Viet Nam','value'=>'VN'],
   [  'text'=> 'Vietnam','value'=>'VN'],
   [  'text'=> 'Virgin Islands, British','value'=>'VG'],
   [  'text'=> 'Virgin Islands, U.S.','value'=>'VI'],
   [  'text'=> 'Wallis and Futuna','value'=>'WF'],
   [  'text'=> 'Western Sahara','value'=>'EH'],
   [  'text'=> 'Yemen','value'=>'YE'],
   [  'text'=> 'Zambia','value'=>'ZM'],
   [  'text'=> 'Zimbabwe','value'=>'ZW' ]];

    }
}
