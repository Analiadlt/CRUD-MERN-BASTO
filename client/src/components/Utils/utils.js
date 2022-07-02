export function validate(input) {
	let errors = {}

	// if (input.senasaId && input.senasaId.length > 16) {
	// 	errors.name = 'ID SENASA must be a 16-character alphanumeric string.'
	// } else {
	// 	if (input.dispositivoNro && input.dispositivoNro.length > 8) {
	// 		errors.name = 'Device Number must be a 8-character alphanumeric string.'
	// 	} else {
	// 		if (input.pesoKg && input.pesoKg === 0 ) {
	// 			errors.name = 'Peso must be a number higher than 0.'
	// 		} else {
	// 			if (input.potreroNombre && input.potreroNombre === '' )	{
	// 				errors.name = 'Potrero Nombre must be a string';
	// 			} 
	// 			}
	// 		}
	// 	}
	if (input.senasaId && input.senasaId.length > 16) {
		errors.name = 'ID SENASA must be a 16-character alphanumeric string.'
	}
	//  else {
		if (input.dispositivoNro && input.dispositivoNro.length > 8) {
			errors.name = 'Device Number must be a 8-character alphanumeric string.'
		}
		//  else {
			if (input.pesoKg && input.pesoKg === 0 ) {
				errors.name = 'Peso must be a number higher than 0.'
			}
			//  else {
				if (input.potreroNombre && input.potreroNombre === '' )	{
					errors.name = 'Potrero Nombre must be a string';
				} 
		// 		}
		// 	}
		// }
		console.log('errorororor ', errors)
	return errors;
}