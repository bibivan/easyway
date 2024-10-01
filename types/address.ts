import type { TNullable } from '~/types'
import type { ValidationRuleWithParams } from '@vuelidate/core'

export interface IAddressData {
  area: TNullable<string>
  area_fias_id: TNullable<string>
  area_kladr_id: TNullable<string>
  area_type: TNullable<string>
  area_type_full: TNullable<string>
  area_with_type: TNullable<string>
  beltway_distance: TNullable<string>
  beltway_hit: TNullable<string>
  block: TNullable<string>
  block_type: TNullable<string>
  block_type_full: TNullable<string>
  capital_marker: TNullable<string>
  city: TNullable<string>
  city_area: TNullable<string>
  city_district: TNullable<string>
  city_district_fias_id: TNullable<string>
  city_district_kladr_id: TNullable<string>
  city_district_type: TNullable<string>
  city_district_type_full: TNullable<string>
  city_district_with_type: TNullable<string>
  city_fias_id: TNullable<string>
  city_kladr_id: TNullable<string>
  city_type: TNullable<string>
  city_type_full: TNullable<string>
  city_with_type: TNullable<string>
  country: TNullable<string>
  country_iso_code: TNullable<string>
  divisions: TNullable<string>
  entrance: TNullable<string>
  federal_district: TNullable<string>
  fias_actuality_state: TNullable<string>
  fias_code: TNullable<string>
  fias_id: TNullable<string>
  fias_level: TNullable<string>
  flat: TNullable<string>
  flat_area: TNullable<string>
  flat_cadnum: TNullable<string>
  flat_fias_id: TNullable<string>
  flat_price: TNullable<string>
  flat_type: TNullable<string>
  flat_type_full: TNullable<string>
  floor: TNullable<string>
  geo_lat: TNullable<string>
  geo_lon: TNullable<string>
  geoname_id: TNullable<string>
  history_values: TNullable<string>
  house: TNullable<string>
  house_cadnum: TNullable<string>
  house_fias_id: TNullable<string>
  house_flat_count: TNullable<string>
  house_kladr_id: TNullable<string>
  house_type: TNullable<string>
  house_type_full: TNullable<string>
  kladr_id: TNullable<string>
  metro: TNullable<string>
  okato: TNullable<string>
  oktmo: TNullable<string>
  postal_box: TNullable<string>
  postal_code: TNullable<string>
  qc: TNullable<string>
  qc_complete: TNullable<string>
  qc_geo: TNullable<string>
  qc_house: TNullable<string>
  region: TNullable<string>
  region_fias_id: TNullable<string>
  region_iso_code: TNullable<string>
  region_kladr_id: TNullable<string>
  region_type: TNullable<string>
  region_type_full: TNullable<string>
  region_with_type: TNullable<string>
  room: TNullable<string>
  room_cadnum: TNullable<string>
  room_fias_id: TNullable<string>
  room_type: TNullable<string>
  room_type_full: TNullable<string>
  settlement: TNullable<string>
  settlement_fias_id: TNullable<string>
  settlement_kladr_id: TNullable<string>
  settlement_type: TNullable<string>
  settlement_type_full: TNullable<string>
  settlement_with_type: TNullable<string>
  source: TNullable<string>
  square_meter_price: TNullable<string>
  stead: TNullable<string>
  stead_cadnum: TNullable<string>
  stead_fias_id: TNullable<string>
  stead_type: TNullable<string>
  stead_type_full: TNullable<string>
  street: TNullable<string>
  street_fias_id: TNullable<string>
  street_kladr_id: TNullable<string>
  street_type: TNullable<string>
  street_type_full: TNullable<string>
  street_with_type: TNullable<string>
  tax_office: TNullable<string>
  tax_office_legal: TNullable<string>
  timezone: TNullable<string>
  unparsed_parts: TNullable<string>
}

export interface IAddressSuggestion {
  data: IAddressData
  unrestricted_value: string
  value: string
}

export interface ILocationRestrictionItem {
  country_iso_code: string
}

export interface IAddressInputState {
  addressSuggestions: IAddressSuggestion[]
  dropdownIsOpened: boolean
  addressIsSelected: boolean
  inputValue: string
  requestTimeout: TNullable<ReturnType<typeof setTimeout>>
  highlightItemIndex: number
}

export interface IAddressInputValidationRules {
  required: ValidationRuleWithParams
  addressSelected: ValidationRuleWithParams
  fullAddress?: ValidationRuleWithParams
}
