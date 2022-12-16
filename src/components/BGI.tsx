type BGIProps = {
    src: any
}

export function BGI(props: BGIProps) {
    return (
        <div style={{
            width: '100%',
            minHeight: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(${props.src})`,
            position: 'fixed',
            zIndex: -999,
            top: 0,
        }}/>
    )
}
