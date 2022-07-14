# sim-information

Gets info from the Sim card like the carrier name, mcc, mnc and country code and other system dependent info.

## Install

```bash
npm install sim-information
npx cap sync
```

## API

```bash
import { Siminfo } from "sim-information"
```

<docgen-index>

* [`echo(...)`](#echo)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### echo(...)

```typescript
echo(options: { value: string; }) => Promise<{ value: string; }>
```

| Param         | Type                            |
| ------------- | ------------------------------- |
| **`options`** | <code>{ value: string; }</code> |

**Returns:** <code>Promise&lt;{ value: string; }&gt;</code>

--------------------

</docgen-api>

## Author

#### Kothapalli Somasekhar

- https://github.com/Somasekhar1712