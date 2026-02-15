type PwaRegisterScriptProps = {
  disabled?: boolean;
};

export function PwaRegisterScript(props: PwaRegisterScriptProps) {
  const { disabled = false } = props;

  if (disabled || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          "if('serviceWorker' in navigator){window.addEventListener('load',function(){navigator.serviceWorker.register('/sw.js',{scope:'/'}).catch(function(){})})}",
      }}
    />
  );
}
