import { Label } from '@fluentui/react';
import * as React from 'react';
import { CellRendererOverrides, RECID, d1 } from '../types';
import { stringify } from 'querystring';
import { StringDecoder } from 'string_decoder';

export const cellRendererOverrides: CellRendererOverrides = {
    ["Text"]: (props, col) => {
        // Render all text cells in green font
        return <Label style={{ color: 'green' }}>{props.formattedValue}</Label>
    },
    ["Currency"]: (props, col) => {
        // Only override the cell renderer for the CreditLimit column
        if (col.colDefs[col.columnIndex].name === 'socl_invoicetotal') {
            // Render the cell value in green when the value is blue than $100,000 and red otherwise
            if ((props.value as number) < 100) {
                return <Label style={{ color: 'green', textAlign: 'right', padding: '5px 25px 5px 0px' }}>{props.formattedValue}</Label>
            }
            else {
                return <Label style={{ color: 'red', textAlign: 'right', padding: '5px 25px 5px 0px' }}>{col.rowData?.[d1].name}</Label>
            }
        }
    }
}
