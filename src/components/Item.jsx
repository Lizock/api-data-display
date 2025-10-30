export default function Item({ label, value }) {
    const Label = () => <strong>{label}:</strong>
    const Value = () => <span>{value}</span>

    return (
        <div className="item">
            <Label /> <Value />
        </div>
    )
}
